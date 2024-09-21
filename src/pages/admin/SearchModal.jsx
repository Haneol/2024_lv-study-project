import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ModalWrap = styled.div`
  position: fixed; // fixed 하기 위해서는 크기 값이 있어야 한다.
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 2000;
`;

const Inner = styled.div`
  width: 500px;
  padding: 16px 16px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;
const ClickArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 10px 20px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

function SearchModal({
  setModal,
  setAddress,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) {
  const [input, setInput] = useState("");
  let map = useRef(null);
  let marker = useRef(null);
  let geocoder = useRef(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      return;
    }

    if (latitude !== 0 && longitude !== 0) {
      initMap(latitude, longitude);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          initMap(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }, []);

  const initMap = (lat, lng) => {
    const container = document.getElementById("map3");
    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    map.current = new window.kakao.maps.Map(container, options);
    geocoder.current = new window.kakao.maps.services.Geocoder();

    marker.current = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(lat, lng),
    });

    marker.current.setMap(map.current);

    window.kakao.maps.event.addListener(
      map.current,
      "click",
      function (mouseEvent) {
        const latlng = mouseEvent.latLng;
        marker.current.setPosition(latlng);
        geocoder.current.coord2Address(
          latlng.getLng(),
          latlng.getLat(),
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              if (result[0].road_address) {
                setAddress(result[0].road_address.address_name);
              } else {
                setAddress(result[0].address.address_name);
              }
            }
          }
        );
      }
    );
  };

  function search() {
    geocoder.current.addressSearch(input, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        if (result[0].road_address) {
          setAddress(result[0].road_address.address_name);
        } else {
          setAddress(result[0].address.address_name);
        }
        marker.current.setPosition(
          new window.kakao.maps.LatLng(result[0].y, result[0].x)
        );
        map.current.setCenter(
          new window.kakao.maps.LatLng(result[0].y, result[0].x)
        );
      }
    });
  }

  const setlatlng = () => {
    setLatitude(marker.current.getPosition().getLat());
    setLongitude(marker.current.getPosition().getLng());
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalWrap>
      <ClickArea className="clickArea" onClick={closeModal} />
      <Inner className="inner bg-white bg-opacity-80 rounded-lg">
        <h5 className="text-center mb-3 font-extrabold font-20">
          위치 검색하기
        </h5>
        <div className="mb-3">
          <StyledInput
            className="bg-gray-500 bg-opacity-10 rounded-lg px-2 w-full"
            type="text"
            placeholder="주소를 검색해 주세요."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
          />
        </div>
        <div
          id="map3"
          className="mb-3 rounded-lg"
          style={{ width: "100%", height: "300px" }}
        ></div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={closeModal}
            className="rounded-lg px-2 bg-opacity-60 hover:bg-opacity-100"
          >
            취소
          </button>
          <button
            onClick={() => setlatlng()}
            className="transition duration-200 bg-black rounded-2xl px-4 py-1 bg-opacity-20 hover:bg-opacity-40 hover:text-white hover:font-light"
          >
            확인
          </button>
        </div>
      </Inner>
    </ModalWrap>
  );
}

export default SearchModal;
