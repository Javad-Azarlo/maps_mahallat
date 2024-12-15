// import { IoMenuOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import SearchBox from "../modules/SearchBox";

// import guest from "../images/guest.png";

import styles from "./sideBar.module.css";
function SideBar({ setPropsState, setSideBar, layersHandler, zoomReff }) {
  // useEffect(() => {
  //   category_sub({
  //     id: "0",
  //     cas_id: `${token}`,
  //   });
  // }, [layers]);

  return (
    <div className="div2">
      <button
        className={styles.btnMenu}
        onClick={() => {
          setSideBar(true);
        }}
      >
        <TiThMenu onClick={layersHandler} style={{ color: "#fff" }} size={19} />
      </button>
      <button className={styles.btnMenu}>
        <AiOutlineHome style={{ color: "#fff" }} size={19} />
      </button>
      <button className={styles.btnGuest}>
        {/* <img src={guest} alt="guest"/> */}
        <FaUser style={{ color: "#fff" }} />
      </button>
      <div>
        <SearchBox zoomReff={zoomReff} setPropsState={setPropsState} size={19} />
      </div>
    </div>
  );
}

export default SideBar;
