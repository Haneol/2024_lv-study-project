import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import data from "../../data";
import Footer from "../../components/footer/Footer";

function AnimatedItem({ item }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link to={`/detail/${item.id}`} className="group block">
        <div
          className="relative bg-white bg-opacity-30 backdrop-filter backdrop-blur-[2px] rounded-2xl p-4
                    transition-all duration-300 ease-in-out
                    group-hover:bg-opacity-20 group-hover:backdrop-blur-[8px]
                    before:absolute before:inset-0 before:z-[-1] before:rounded-2xl
                    before:transition-all before:duration-300
                    group-hover:before:shadow-lg group-hover:before:shadow-black/10
                    group-hover:before:border group-hover:before:border-white/20"
        >
          <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-4">
            <img
              src={item.img[600]}
              alt={item.name}
              className="w-full h-64 object-contain mb-4"
            />
            <div className="text-center transition-opacity duration-300 group-hover:opacity-90">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ShopListMan() {
  const menItems = data.filter((item) => item.tag.includes("남성"));

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="my-32 mx-20 text-center md:text-left">
          <h1 className="text-3xl mb-5 font-bold">남성을 위한 선물</h1>
          <p>데일리 포인트가 되어줄 감각적인 남성 선물 아이템을 만나보세요.</p>
        </div>
        <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menItems.map((item) => (
            <AnimatedItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mb-32" />
      <Footer />
    </div>
  );
}

export default ShopListMan;
