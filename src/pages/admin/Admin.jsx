import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SearchModal from "./SearchModal";

const LocationWrap = styled.div`
  height: calc(100% - 20px);
  overflow-y: auto;
  gap: 8px;
  margin: 0 15px;
  padding: 0 17px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    margin: 5px 0;
  }
`;

const StyledInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 20);

  &::placeholder {
    opacity: 0.8;
    color: #e0e0e0;

    font-size: 12px;
  }

  &:focus {
    outline: none;
    border: 3px solid rgba(255, 255, 255, 100);
  }
`;

function Admin() {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [image, setImage] = useState(null);
  const [imageText, setImageText] = useState(null);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const locations = useSelector((state) => state.location.locationList);
  const dispatch = useDispatch();
  const map = useRef(null);
  let isDisabled =
    !imageText || !address || inputName === "" || inputPhone === "";

  useEffect(() => {
    initMap();
  }, [locations]);

  // 지도 생성 함수
  function initMap() {
    let mapContainer = document.getElementById("map2"),
      mapOption = {
        center: new window.kakao.maps.LatLng(37.48322, 126.91562),
        level: 8,
      };

    map.current = new window.kakao.maps.Map(mapContainer, mapOption);
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

      var infowindow = new window.kakao.maps.InfoWindow({
        content: `<div class="w-36 text-center">${loc.name}</div>`, // 인포윈도우에 표시할 내용
      });

      window.kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map.current, marker, infowindow)
      );
      window.kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
      marker.setMap(map.current);
    });
  }

  // 리스트의 항목 클릭시 이동하는 함수
  function moveCenter(loc) {
    setEditMode(true);
    setInputName(loc.name);
    setInputPhone(loc.phone);
    setLatitude(loc.latitude);
    setLongitude(loc.longitude);
    setAddress(loc.address);
    setImage(loc.image);
    setImageText(loc.image);
    setSelectedName(loc.name);
    const moveLatLon = new window.kakao.maps.LatLng(
      loc.latitude,
      loc.longitude
    );
    map.current.panTo(moveLatLon);
  }
  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  function deleteLocation(item) {
    if (window.confirm(`'${item.name}' 매장을 삭제하시겠습니까?`)) {
      dispatch({ type: "delete", payload: item.name });
    }
  }

  function addLocation() {
    const data = {
      name: inputName,
      phone: inputPhone,
      address: address,
      latitude: latitude,
      longitude: longitude,
      image: image,
    };
    dispatch({ type: "post", payload: data });
    clear();
  }

  function editLocation() {
    const editedData = {
      name: inputName,
      phone: inputPhone,
      address: address,
      latitude: latitude,
      longitude: longitude,
      image: image,
      selectedName: selectedName,
    };
    console.log(editedData);
    dispatch({ type: "put", payload: editedData });
    setEditMode(false);
    clear();
  }

  function clear() {
    setInputName("");
    setInputPhone("");
    setAddress("");
    setLatitude(0);
    setLongitude(0);
    setImage(null);
    setImageText(null);
    setSelectedName("");
  }

  function handleImageChange(e) {
    setImageText(e.target.value);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Base64 문자열로 이미지 저장
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="md:h-screen">
      <div className="container mx-auto p-5 md:p-0 2xl:px-16">
        <p className="m-6 text-gray-100 text-3xl font-bold">
          Administrator Page
        </p>
        <div className="container p-10 bg-gray-100 bg-opacity-20 rounded-lg border border-white border-opacity-30">
          <div className="flex flex-wrap">
            <div
              className="rounded-lg pt-5 w-full order-2 md:order-1 md:w-[38.5%] bg-gray-100 bg-opacity-40 flex-col"
              style={{ height: "60vh" }}
            >
              <LocationWrap>
                {locations.length !== 0 ? (
                  locations.map((item, index) => {
                    return (
                      <div
                        className="cursor-pointer rounded-lg w-full bg-gray-100 bg-opacity-30 mb-2 mt-2 hover:scale-[1.03] hover:hover:shadow-[0px_2px_15px_rgba(0,0,0,0.2)]  hover:bg-opacity-40 duration-[0.4s]"
                        key={index}
                        onClick={() => moveCenter(item)}
                      >
                        <div
                          style={{ minHeight: "100px" }}
                          className="flex flex-col justify-between text-center md:text-left text-sm md:text-xs lg:text-sm lg py-2 px-7 relative"
                        >
                          <p className="font-semibold">{item.name}</p>
                          <p>{item.address}</p>
                          <p>{item.phone}</p>
                          <button
                            className="absolute top-11 right-4 font-bold text-base opacity-40 hover:opacity-100"
                            onClick={(event) => {
                              deleteLocation(item);
                              event.stopPropagation();
                            }}
                          >
                            <img src="./images/x.jpg" alt="" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-gray-400">
                    등록된 매장이 없습니다.
                  </p>
                )}
              </LocationWrap>
            </div>
            <div
              className="w-full md:w-7/12 mb-5 md:mb-0 md:ml-auto order-1 md:order-2 flex flex-col justify-between"
              style={{ height: "60vh" }}
            >
              <div
                id="map2"
                className="w-full rounded-lg"
                style={{ height: "28vh" }}
              ></div>
              <div
                className="w-full rounded-lg bg-black bg-opacity-10 px-6 py-4"
                style={{ height: "28vh" }}
              >
                <div className="flex justify-between">
                  <h1 className="text-white font-bold text-xl mb-3 ">
                    {editMode ? "매장 수정하기" : "매장 추가하기"}
                  </h1>
                  <div className="flex items-start gap-4">
                    {editMode && (
                      <div
                        className="text-white cursor-pointer"
                        onClick={() => {
                          setEditMode(false);
                          clear();
                        }}
                      >
                        취소
                      </div>
                    )}
                    <button
                      onClick={!editMode ? addLocation : editLocation}
                      className={`flex justify-center items-center w-20 h-7 mr-1 bg-black bg-opacity-20 rounded-full text-white text-opacity-60 ${
                        !isDisabled &&
                        "hover:bg-opacity-40 hover:text-opacity-100"
                      }`}
                      disabled={isDisabled}
                    >
                      {editMode ? (
                        <div
                          className={`flex gap-1 ${
                            !isDisabled ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          <img
                            src="./icons/edit-2.svg"
                            alt=""
                            className="w-4"
                          />
                          <p>수정</p>
                        </div>
                      ) : (
                        <p>+ 등록</p>
                      )}
                    </button>
                  </div>
                </div>
                <div className="h-full">
                  <div className="h-1/3 mb-3 flex justify-between">
                    <StyledInput
                      type="text"
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      className="text-xs text-white bg-white bg-opacity-10 rounded-full h-full px-5 text-center"
                      style={{ width: "47%" }}
                      placeholder="매장명을 입력하세요."
                    />
                    <StyledInput
                      type="text"
                      value={inputPhone}
                      onChange={(e) => setInputPhone(e.target.value)}
                      className="text-white text-xs bg-white bg-opacity-10 rounded-full h-full px-5 text-center"
                      style={{ width: "47%" }}
                      placeholder="전화번호를 입력하세요."
                    />
                  </div>
                  <div className="h-full mb-3 flex justify-between">
                    <button
                      onClick={() => setModal(true)}
                      className={`border border-white bg-white bg-opacity-10 ${
                        !isDisabled && "bg-opacity-30"
                      } hover:bg-opacity-50 text-white font-bold text-opacity-80 hover:text-opacity-100 border-white rounded-full h-1/3 px-5  text-center`}
                      style={{ width: "47%" }}
                    >
                      <div className="flex justify-center items-center content-center gap-2 w-full">
                        <img src="./images/mapIcon.jpg" alt="" />
                        <p
                          className={`${
                            address ? "text-white" : "text-gray-200"
                          }  text-xs whitespace-nowrap overflow-hidden text-ellipsis`}
                        >
                          {address ? address : `장소 검색하기`}
                        </p>
                      </div>
                    </button>

                    <label
                      htmlFor="file"
                      className="border border-white cursor-pointer flex justify-center items-center border-white bg-white bg-opacity-10 hover:bg-opacity-30 rounded-full h-1/3 px-5 py-3"
                      style={{ width: "47%" }}
                    >
                      <p
                        className={`whitespace-nowrap overflow-hidden text-ellipsis ${
                          imageText ? "text-white" : "text-gray-200"
                        } text-xs w-full text-center`}
                      >
                        {imageText ? imageText : `이미지를 선택해주세요.`}
                      </p>
                    </label>
                    <input
                      type="file"
                      id="file"
                      accept="imgae/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <SearchModal
          setModal={setModal}
          setAddress={setAddress}
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
      )}
    </div>
  );
}

export default Admin;
