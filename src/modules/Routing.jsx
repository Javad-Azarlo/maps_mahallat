// import React, { useRef, useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaCarRear } from "react-icons/fa6";
// import { IoMdBicycle } from "react-icons/io";
// import { FaPersonWalking } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

import { LuArrowUpDown } from "react-icons/lu";
import styles from "./routing.module.css";
import { BeatLoader } from "react-spinners";


function Routing({ setSideBar, setCunterSideBar, currentHandler, isloading }) {

  return (
    <>
      {/* <header className={styles.header}>
        <span className={styles.icon} onClick={() => setCunterSideBar(0)}>
          <IoIosArrowRoundForward />
        </span>
        <div className={styles.main}>
          <span
            onClick={carHandler}
            className={isActive.car && styles.iconClick}
          >
            <FaCarRear className={isActive.car && styles.iconClick} />
          </span>
          <span
            onClick={bicycleHandler}
            className={isActive.bicycle && styles.iconClick}
          >
            <IoMdBicycle className={isActive.bicycle && styles.iconClick} />
          </span>
          <span
            onClick={humanHandler}
            className={isActive.human && styles.iconClick}
          >
            <FaPersonWalking className={isActive.human && styles.iconClick} />
          </span>
        </div>

        <span onClick={() => setSideBar(false)}>
          <IoMdClose className={styles.icon} />
        </span>
      </header> */}
      <section>
        <form className={styles.frmDestination}>
          <div>
            <input placeholder="مبدا را جستجو کرده یا از روی نقشه انتخاب نمایید" />
            <input placeholder="مقصد را جستجو کرده یا از روی نقشه انتخاب نمایید" />
          </div>
          <span>
            <LuArrowUpDown />
          </span>
        </form>
      </section>
      <footer className={styles.footer} onClick={currentHandler}>
        {isloading ? (
          <BeatLoader size={10}  style={{  margin: '0 10px'
          }}/>
        ) : (
          <span>
            موقعیت مکانی خودم
            <SlLocationPin />
          </span>
        )}
      </footer>
    </>
  );
}

export default Routing;
