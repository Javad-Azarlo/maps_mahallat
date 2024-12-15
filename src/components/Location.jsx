/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { IoLayers } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { getPostion } from "../services/serviceFunc";
import { ClipLoader } from "react-spinners";
import styles from "./Location.module.css";

function Location({
  error,
  isloading,
  currentHandler,
  postion,
  setPopUp,
  setPopupOpen,
}) {
  const openPopUp = () => {
    setPopupOpen(true);
    setPopUp({ Coordinate: false, layers: true });
  };
  return (
    <div className="div7">
      <button className={styles.btnMenu}>
        <MdQuestionMark style={{ color: "#fff" }} size={19} />
      </button>
      <button className={styles.btnMenu}>
        <IoLayers style={{ color: "#fff" }} size={19} onClick={openPopUp} />
      </button>
      <button className={styles.btnMenu} onClick={currentHandler}>
        {isloading ? (
          <ClipLoader color="#ffffff" size={19} />
        ) : (
          <TbCurrentLocation style={{ color: "#fff" }} size={19} />
        )}
      </button>
    </div>
  );
}

export default Location;
