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
      <Link to={`/detail/${item.id}`} className="group block h-full">
        <div
          className="relative bg-white bg-opacity-30 backdrop-filter backdrop-blur-[2px] rounded-2xl p-4
                    transition-all duration-300 ease-in-out h-full flex flex-col
                    group-hover:bg-opacity-20 group-hover:backdrop-blur-[8px]
                    before:absolute before:inset-0 before:z-[-1] before:rounded-2xl
                    before:transition-all before:duration-300
                    group-hover:before:shadow-lg group-hover:before:shadow-black/10
                    group-hover:before:border group-hover:before:border-white/20"
        >
          <div className="flex-grow flex flex-col items-center justify-between transform transition-transform duration-300 group-hover:-translate-y-4">
            <img
              src={item.img[600]}
              alt={item.name}
              className="w-full h-64 object-contain mb-4"
            />
            <div className="text-center transition-opacity duration-300 group-hover:opacity-90">
              <div className="font-semibold">{item.name}</div>
              <div>{item.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ShopListWoman() {
  const womenItems = data.filter((item) => item.tag.includes("여성"));

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="my-32 mx-20 text-center md:text-left">
          <h1 className="text-3xl mb-5 font-bold">여성을 위한 선물</h1>
          <p>리버서블이 가능한 NEW 네버풀 인사이드 아웃 런칭을 기념하여</p>
          <p>
            해당 제품 온라인 구매자 대상으로 레더 택 증정 및 이니셜 각인
            서비스를 제공합니다.
          </p>
          <p>*해당 서비스는 한정 수량으로, 레더 택 소진 시까지 증정됩니다.</p>
        </div>
        <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {womenItems.map((item) => (
            <AnimatedItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mb-32" />
      <Footer />
    </div>
  );
}

export default ShopListWoman;
