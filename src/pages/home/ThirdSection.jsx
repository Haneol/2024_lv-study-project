import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PLUS_NUM = 0.012;

const TitleArea = styled.div`
  color: white;
  line-height: 32px;
  font-size: 24px;
  position: relative;
  margin-left: 85px;
  margin-bottom: 50px;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 80px;
    border: 2px solid white;
    top: 15px;
    left: -85px;
  }
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 250px;
    border: 2px solid white;
    top: 15px;
    left: 110px;
  }
`;

const LocationWrap = styled.div`
  height: calc(100% - 92px);
  overflow-y: scroll;
  gap: 8px;
  padding: 0 20px;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

function ThirdSection() {
  const locations = useSelector((state) => state.location.locationList);
  const [inMaps, setInMaps] = useState([]);
  const [activeOverLay, setActiveOverLay] = useState(null);
  const map = useRef(null);

  useEffect(() => {
    initMap();
  }, [locations]);

  useEffect(() => {
    if (activeOverLay) {
      return () => {
        activeOverLay.setMap(null);
      };
    }
  }, [activeOverLay]);
  // 지도 생성 함수
  function initMap() {
    let mapContainer = document.getElementById("map"),
      mapOption = {
        center: new window.kakao.maps.LatLng(37.48322, 126.91562),
        level: 7,
      };

    map.current = new window.kakao.maps.Map(mapContainer, mapOption);

    updateInMaps(map.current.getBounds());
    window.kakao.maps.event.addListener(
      map.current,
      "bounds_changed",
      function () {
        updateInMaps(map.current.getBounds());
      }
    );

    initMarkers();
  }
  // 마커 생성 함수
  function initMarkers() {
    const imageSrc = "./images/marker.jpg";
    const imageSize = new window.kakao.maps.Size(28, 32);
    const imageOption = { offset: new window.kakao.maps.Point(14, 32) };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    locations.forEach((loc) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(loc.latitude, loc.longitude),
        image: markerImage,
      });
      marker.setMap(map.current);
      const customOverlay = createOverLay(loc, marker);

      window.kakao.maps.event.addListener(marker, "click", function () {
        if (activeOverLay) activeOverLay.setMap(null);

        const moveLatLon = new window.kakao.maps.LatLng(
          marker.getPosition().getLat() + PLUS_NUM,
          marker.getPosition().getLng()
        );
        map.current.panTo(moveLatLon);
        customOverlay.setMap(map.current);
        setActiveOverLay(customOverlay);
      });
    });
  }
  // 커스텀 오버레이 생성 함수
  function createOverLay(loc, marker) {
    const overlayContent = document.createElement("div");
    overlayContent.className = "custom-overlay";
    overlayContent.innerHTML = `
      <div class="bg-gray-100 w-64 h-44 shadow-xl px-3 py-3 relative">
        <button 
          class="absolute font-bold text-lg top-2 right-2 text-gray-500 hover:text-black" 
        >X</button>
        <p class="font-bold text-base text-left mb-3">${loc.name}</p>
        <div class="flex gap-2"> 
          <img class="w-32 h-28" src="${loc.image}" />
          <div class="flex flex-col justify-between text-gray-500">
            <p class="text-xs whitespace-pre-wrap">${loc.address}</p>
            <p class="text-xs whitespace-pre-wrap">${loc.phone}</p>
          </div>
        </div>
      </div> 
    `;
    const customOverlay = new window.kakao.maps.CustomOverlay({
      content: overlayContent,
      map: map.current,
      position: marker.getPosition(),
      xAnchor: 0.49, // x 좌표 조절
      yAnchor: 1.23, // y 좌표 조절
    });

    customOverlay.setMap(null);

    const closeButton = overlayContent.querySelector("button");
    closeButton.onclick = function () {
      customOverlay.setMap(null);
      setActiveOverLay(null);
    };

    return customOverlay;
  }
  // 지도 영역 내부의 리스트 구하는 함수
  function updateInMaps(bounds) {
    let swLatlng = bounds.getSouthWest(); // 남서쪽
    let neLatlng = bounds.getNorthEast(); // 북동쪽

    const array = locations.filter(
      (loc) =>
        loc.latitude >= swLatlng.getLat() &&
        loc.latitude <= neLatlng.getLat() &&
        loc.longitude >= swLatlng.getLng() &&
        loc.longitude <= neLatlng.getLng()
    );
    setInMaps(array);
  }
  // 리스트의 항목 클릭시 이동하는 함수
  function moveCenter(loc) {
    if (activeOverLay) activeOverLay.setMap(null);
    const moveLatLon = new window.kakao.maps.LatLng(
      loc.latitude,
      loc.longitude
    );
    map.current.panTo(moveLatLon);
  }

  return (
    <div className="md:h-screen ">
      <div className="container mx-auto p-5 md:p-0">
        <TitleArea>매장 정보</TitleArea>
        <div className="container p-10 bg-gray-100 bg-opacity-20 rounded-lg">
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 mb-5 md:mb-0">
              <div
                id="map"
                className="w-full rounded-lg"
                style={{ height: "60vh" }}
              ></div>
            </div>
            <div
              className="rounded-lg w-full md:w-4/12 md:ml-auto bg-gray-100 bg-opacity-40 flex-col"
              style={{ height: "60vh" }}
            >
              <img
                src="./images/brandName.jpg"
                className="my-7 mx-auto w-52 h-9"
                alt=""
              />
              <LocationWrap>
                {inMaps.length !== 0 ? (
                  inMaps.map((item, index) => {
                    return (
                      <div
                        className="cursor-pointer rounded-lg w-full bg-gray-100 bg-opacity-30 mb-2"
                        style={{ height: "150px" }}
                        key={index}
                        onClick={() => moveCenter(item)}
                      >
                        <div className="flex flex-col gap-4 text-center md:text-left text-base md:text-xs lg:text-base lg py-5 px-7">
                          <p className="font-semibold">{item.name}</p>
                          <p>{item.address}</p>
                          <p>{item.phone}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-gray-400">
                    검색 결과가 없습니다.
                  </p>
                )}
              </LocationWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
