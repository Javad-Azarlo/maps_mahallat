import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "react-tabs/style/react-tabs.css";
import TypesMap from "./TypesMap";
import styles from "./layersControl.module.css";
function LayersControl({ setPopupOpen, setPopUp, typeModal }) {
  const [tab, setTap] = useState({
    mapType: true,
    layerMap: false,
  });
  const closePupUp = () => {
    setPopupOpen(false);
    setPopUp({ Coordinate: true, layers: false });
  };
  const clickHandler = (e) => {
    const inner = e.target.innerText;
    if (inner == "نوع نقشه") {
      setTap({
        mapType: true,
        layerMap: false,
      });
    } else {
      setTap({
        mapType: false,
        layerMap: true,
      });
    }
  };

  return (
    <div>
      <header>
        <div onClick={clickHandler}>
          <span className={tab.layerMap && styles.active}>لایه های نقشه</span>
          <span className={tab.mapType && styles.active}>نوع نقشه</span>
        </div>
        <span onClick={closePupUp} style={{ color: "rgb(239, 68,68)" }}>
          <IoMdClose />
        </span>
      </header>
      <main style={{ padding: "20px 8px" }}>
        {tab.mapType ? (
          <div onClick={typeModal} className={styles.mapsType}>
            <TypesMap />
          </div>
        ) : (
          <div>
            <h2>Any content 2</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default LayersControl;
