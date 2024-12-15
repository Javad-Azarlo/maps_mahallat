import React, { useState } from "react";
import { e2p, p2e } from "../services/ConvertNumber";
import { IoMdClose } from "react-icons/io";
import useToast from "../services/toast";
import styles from "./coordinates.module.css";
function Coordinates({
  setPopupOpen,
  mousMoveLat,
  setPropsState,
  // zoomReff
}) {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const widthkeyHandler = (e) => {
    if (isNaN(e.key) && e.key !== "Backspace" && e.key !== ".") {
      e.preventDefault();
    }
  };
  const closeHandler = () => {
    if (width || length) {
      setPopupOpen(false);
      setPropsState({
        center: {
          lat: p2e(width),
          lng: p2e(length),
        },
        zoom: 15,
      });
      // const { current = {} } = zoomReff;

      mousMoveLat.flyTo([p2e(width), p2e(length)]);
    } else {
      useToast("warn", "لطفا مقادیر عرض و طول را وارد نمایید");
      // toast.warning("Danger");
    }
  };
  return (
    <div>
      <header>
        <span>بزرگنمایی به مختصات</span>
        <span
          onClick={() => setPopupOpen(false)}
          style={{ color: "rgb(239, 68,68)" }}
        >
          <IoMdClose />
        </span>
      </header>
      <main>
        <form>
          <label>عرض جغرافیایی</label>
          <input
            type="text"
            value={e2p(width)}
            onChange={(e) => setWidth(e.target.value)}
            onKeyDown={widthkeyHandler}
          />
          <label>طول جغرافیایی</label>
          <input
            type="text"
            value={e2p(length)}
            onChange={(e) => setLength(e.target.value)}
            onKeyDown={widthkeyHandler}
          />
        </form>
        <footer>
          <button onClick={closeHandler}>اعمال</button>
        </footer>
      </main>
    </div>
  );
}

export default Coordinates;
