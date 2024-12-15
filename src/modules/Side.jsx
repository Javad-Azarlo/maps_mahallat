import React, { useEffect, useState } from "react";
import RootSideBar from "./RootSideBar";
import Routing from "./Routing";

import Setting from "./Setting";
import Converts from "./Converts";
import { getCookie } from "../utils/cookie";
import { category_ } from "../services/funcRequest";

import Layers from "./Layers";
import "./side.css";
import { IoIosArrowRoundForward, IoMdBicycle, IoMdClose } from "react-icons/io";
import { FaCarRear, FaPersonWalking } from "react-icons/fa6";
const iconClick = {
  car: true,
  bicycle: false,
  human: false,
};
function Side({
  setSideBar,
  currentHandler,
  isloading,
  layers,
  // zoomReff,
  downloadScreenshot,
  typeModal,
}) {
  const [cunterSideBar, setCunterSideBar] = useState(0);
  const [isActive, setActive] = useState(iconClick);
  const [categ, setCateg] = useState([{ loading: false }, { data: null }]);

  // const carRef = useRef(null);
  const carHandler = () => {
    setActive({ car: true, bicycle: false, human: false });
  };
  const bicycleHandler = () => {
    setActive({ car: false, bicycle: true, human: false });
  };
  const humanHandler = () => {
    setActive({ car: false, bicycle: false, human: true });
  };
  const { token } = getCookie();
  useEffect(() => {
    category_Handler();
    categoryHandler();
  }, []);
  const category_Handler = async () => {
    setCateg([{ loading: true }, { data: null }]);
    try {
      const res = await category_({ id: "1", cas_id: `${token}` });
      setCateg([{ loading: false }, { data: res }]);
    } catch (error) {
      setCateg([{ loading: false }, { data: null }, { error: error.message }]);
    }
  };
  const categoryHandler = async (e) => {
    const val = e.target.id;
    setCateg([{ loading: true }, { data: null }]);
    try {
      const res = await category_({ id: `${val}`, cas_id: `${token}` });
      setCateg([{ loading: false }, { data: res }]);
    } catch (error) {
      setCateg([{ loading: false }, { data: null }, { error: error.message }]);
    }
  };
  return (
    <div className="sideRoot">
      {/* <header className={cunterSideBar === 0 ? "headeRoot" : "headerSide"}> */}
      <header
        className="headeRoot"
        style={{
          background: cunterSideBar === 1 && "#ecfdf5",
        }}
      >
        {cunterSideBar !== 0 && (
          <span
            className="iconSide"
            onClick={() =>
              categ.data ? setCunterSideBar(1) : setCunterSideBar(0)
            }
          >
            <IoIosArrowRoundForward />
          </span>
        )}
        <div className={cunterSideBar !== 1 ? "mainSide2" : "mainSide"}>
          {cunterSideBar === 0 && <span>نقشه</span>}
          {cunterSideBar === 2 && <span>تنظمات من</span>}
          {cunterSideBar === 3 && <span>تبدیلات</span>}
          {cunterSideBar === 4 && <span>مکان ها</span>}

          {cunterSideBar === 1 && (
            <>
              <span
                onClick={carHandler}
                className={isActive.car && "iconClick"}
              >
                <FaCarRear className={isActive.car && "iconClick"} />
              </span>
              <span
                onClick={bicycleHandler}
                className={isActive.bicycle && "iconClick"}
              >
                <IoMdBicycle className={isActive.bicycle && "iconClick"} />
              </span>
              <span
                onClick={humanHandler}
                className={isActive.human && "iconClick"}
              >
                <FaPersonWalking className={isActive.human && "iconClick"} />
              </span>
            </>
          )}
        </div>

        <span onClick={() => setSideBar(false)}>
          <IoMdClose className="iconSide" />
        </span>
      </header>
      {cunterSideBar === 0 && (
        <RootSideBar
          layers={layers}
          setSideBar={setSideBar}
          setCunterSideBar={setCunterSideBar}
          category_Handler={category_Handler}
        />
      )}
      {cunterSideBar === 1 && (
        <Routing
          currentHandler={currentHandler}
          setCunterSideBar={setCunterSideBar}
          setSideBar={setSideBar}
          isloading={isloading}
        />
      )}
      {cunterSideBar === 2 && (
        <Setting
        currentHandler={currentHandler}
          setCunterSideBar={setCunterSideBar}
          // zoomReff={zoomReff}
          downloadScreenshot={downloadScreenshot}
          typeModal={typeModal}
        />
      )}
      {cunterSideBar === 3 && <Converts setCunterSideBar={setCunterSideBar} />}
      {cunterSideBar === 4 && (
        <Layers
          categoryHandler={categoryHandler}
          categ={categ}
          setCunterSideBar={setCunterSideBar}
        />
      )}
    </div>
  );
}

export default Side;
