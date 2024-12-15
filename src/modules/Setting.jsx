import { FiPrinter } from "react-icons/fi";
import { SlMap } from "react-icons/sl";
import { TbArrowRampRight } from "react-icons/tb";
import { TbCurrentLocation } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";

import styles from "./seting.module.css";

function Setting({
  downloadScreenshot,
  // zoomReff,
  typeModal,
  currentHandler,
  setCunterSideBar,
}) {
  return (
    <div className={styles.settingBox}>
      <p onClick={downloadScreenshot}>
        چاپ نمای جاری نقشه <FiPrinter />
      </p>
      <hr />
      <ul onClick={typeModal}>
        <li id="0">
          نقشه نمای روز <SlMap />
        </li>
        <li id="1">
          نقشه نمای شب <SlMap />
        </li>
        <li id="2">
          نقشه ماهواره ای <SlMap />
        </li>
        <li id="3">
          نقشه نمای شب ماهواره ای <SlMap />
        </li>
      </ul>
      <hr />
      <ul>
        <li onClick={() => setCunterSideBar(1)}>
          مسیریابی <TbArrowRampRight />
        </li>
        <li onClick={currentHandler}>
          نمایش موقعیت من <TbCurrentLocation />
        </li>
      </ul>
      <hr />
      <p>
        راه اندازی دوباره
        <FaArrowsRotate />
      </p>
      {/* <img src={image} alt={"Screenshot"} /> */}
    </div>
  );
}

export default Setting;
