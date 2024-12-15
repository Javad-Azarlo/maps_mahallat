import { useEffect, useState } from "react";
import { FaRoute } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosCalculator } from "react-icons/io";
import { TfiLayers } from "react-icons/tfi";
import Switch from "react-switch";
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import styles from "./rootSideBar.module.css";
import { lightPallet, nightPallet } from "../services/serviceFunc";
function RootSideBar({
  setSideBar,
  setCunterSideBar,
  layers,
  category_Handler,
}) {
  const [state, setState] = useState(false);
  const handleChange = (checked) => {
    let r = document.querySelector("#root");
    setState((s) => !s);
    if (!state) {
      nightPallet(r);
    } else {
      lightPallet(r);
    }
  };
  console.log("layers", layers);
  const menuHandler = (e) => {
    console.log(e);
    let val = e.target.tagName;
    console.log("val", val);
    if (val === "path") return;
    else {
      val = e.target.dataset.type;
      if (val === "مسیریابی") {
        setCunterSideBar(1);
      } else if (val === "تنظیمات") {
        setCunterSideBar(2);
      } else if (val === "تبدیلات") {
        setCunterSideBar(3);
      } else {
        setCunterSideBar(4);
      }
    }
  };

  return (
    <>
      {/* <div className={styles.header}>
        <span>نقشه</span>
        <span onClick={() => setSideBar(false)}>
          <IoMdClose className={styles.iconClose} />
        </span>
      </div>
      <br /> */}
      <div className={styles.body} onClick={menuHandler}>
        <div data-type="مسیریابی">
          <FaRoute
            size={25}
            data-type="مسیریابی"
            style={{ stroke: "5" }}
            className={styles.iconSvg}
          />
          <span data-type="مسیریابی">مسیریابی</span>
        </div>
        <div data-type="تنظیمات">
          <IoSettingsOutline
            size={25}
            data-type="تنظیمات"
            className={styles.iconSvg}
          />
          <span data-type="تنظیمات">تنظیمات</span>
        </div>
        <div data-type="تبدیلات">
          <IoIosCalculator
            size={25}
            data-type="تبدیلات"
            className={styles.iconSvg}
          />
          <span data-type="تبدیلات">تبدیلات</span>
        </div>
        <div data-type="لایه های عمومی" onClick={category_Handler}>
          <span></span>
          {layers.loading ? (
            <>
              <img
                src={layers.data?.result[0].icons}
                style={{ width: "25px", height: "25px" }}
              />
              <span data-type="لایه های عمومی">
                {layers.data?.result[0].title_fa}
              </span>
            </>
          ) : (
            <BeatLoader size={10} style={{ margin: "0 10px" }} />
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          <span>نسخه 1.1</span>
          <span>قدرت گرفته از فراگرد</span>
        </p>
        <label htmlFor="small-radius-switch">
          <Switch
            checked={state}
            onChange={handleChange}
            handleDiameter={20}
            offColor="#87e1bb"
            onColor="#4b5769"
            offHandleColor="#fff"
            onHandleColor="#3b82f6"
            height={30}
            width={70}
            className="react-switch"
            id="small-radius-switch"
            checkedIcon={
              <CiLight
                size={28}
                style={{ color: "#fff", marginLeft: "10px" }}
              />
            }
            uncheckedIcon={
              <BsMoonStars
                size={18}
                style={{ marginTop: "5px", marginLeft: "10px" }}
              />
            }
          />
        </label>
      </div>
    </>
  );
}

export default RootSideBar;
