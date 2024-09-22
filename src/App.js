import React, { useCallback, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Provider, useDispatch } from "react-redux";
import HomeComp from "./pages/home/HomeComp";
import ShopList from "./pages/shopList/ShopList";
import ShopListFamily from "./pages/shopList/ShopListFamily";
import ShopListMan from "./pages/shopList/ShopListMan";
import ShopListWoman from "./pages/shopList/ShopListWoman";
import Detail from "./pages/detail/Detail";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/notFound/NotFound";
import store from "./store";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "4px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

function ScrollableContent() {
  const dispatch = useDispatch();
  const location = useLocation();
  const scrollbarsRef = useRef();
  const prevPathRef = useRef(location.pathname);
  const scrollPositionRef = useRef(0);

  const handleScroll = (values) => {
    const { scrollTop } = values;
    dispatch({ type: "SET_SCROLL_POSITION", payload: scrollTop });

    // Store scroll position for ShopList pages
    if (location.pathname.includes("/shopList")) {
      scrollPositionRef.current = scrollTop;
    }
  };

  const scrollToTop = useCallback(() => {
    if (scrollbarsRef.current) {
      const start = scrollbarsRef.current.getScrollTop();
      const change = -start;
      const duration = 500;
      let startTime = null;

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);

        const easeInOutQuad = (t) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const value = start + change * easeInOutQuad(percent);

        scrollbarsRef.current.scrollTop(value);
        dispatch({ type: "SET_SCROLL_POSITION", payload: value });

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          dispatch({ type: "SET_SCROLL_POSITION", payload: 0 });
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }, [dispatch]);

  useEffect(() => {
    const isBackToShopList =
      prevPathRef.current.includes("/detail") &&
      location.pathname.includes("/shopList");

    if (!location.pathname.includes("/detail")) {
      if (scrollbarsRef.current) {
        if (isBackToShopList) {
          // Restore scroll position when navigating back from /detail to /shopList
          scrollbarsRef.current.scrollTop(scrollPositionRef.current);
        } else {
          // Reset scroll position for other navigations
          scrollbarsRef.current.scrollTop(0);
        }
      }
      if (!isBackToShopList) {
        dispatch({ type: "SET_SCROLL_POSITION", payload: 0 });
      }
    }

    prevPathRef.current = location.pathname;
  }, [location, dispatch]);

  return (
    <Scrollbars
      ref={scrollbarsRef}
      style={{ width: "100vw", height: "100vh" }}
      renderThumbVertical={renderThumb}
      universal={true}
      autoHide
      onUpdate={handleScroll}
    >
      <Navbar scrollToTop={scrollToTop} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomeComp />} />
        <Route path="/shopList/special" element={<ShopList />} />
        <Route path="/shopList/family" element={<ShopListFamily />} />
        <Route path="/shopList/men" element={<ShopListMan />} />
        <Route path="/shopList/women" element={<ShopListWoman />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Scrollbars>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ScrollableContent />
    </Provider>
  );
}

export default App;
