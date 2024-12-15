import { IoSearchSharp } from "react-icons/io5";

import { useRef, useState } from "react";
import {
  category_marker,
  search_auto,
  searchStreet,
} from "../services/funcRequest";
import { getCookie } from "../utils/cookie";

import { SlLocationPin } from "react-icons/sl";

import { arrayLayers } from "../services/instance";
import { BeatLoader } from "react-spinners";
import useToast from "../services/toast";
import styles from "./serachBox.module.css";

function SearchBox({ zoomReff, setPropsState }) {
  const refParentSearch = useRef(null);
  const refSearch4 = useRef(null);
  const refBxSeechList = useRef(null);
  const [valSearch, setValSearch] = useState("");
  const [data, setData] = useState({ loading: true, data: null, error: "" });

  const serchFormHandler = () => {};

  const searchHandler = () => {
    refSearch4.current.style.display = "block";
  };
  const serchBlur = () => {
    refSearch4.current.style.display = "none";
  };

  const searchMap = async (e) => {
    refBxSeechList.current.style.display = "flex";
 
    const { token } = getCookie();
    setValSearch(e.target.value);
    // await searchStreet(valSearch);

    const res = await search_auto({
      id: `${valSearch}`,
      cas_id: `${token}`,
      // cas_id: "2d3b59e316cae28930ab79ad250b5962e4d523a3",
    });
    try {
      if (res.status === "8") {
        setData({ loading: false, data: res, error: "" });
      } else {
        setData({ loading: true, data: null, error: "" });
      }
    } catch (error) {
      setData({
        loading: false,
        data: null,
        error: "وضعیت اینترنت خود را چک کنید",
      });
      useToast("info", data.error);
    }
  };
  const markerHandler = (e) => {
    const id = e.target.id;
    category_marker({
      id: `${id}`,
      cas_id: `${token}`,
    });
  };
  const mapZoom = (lat, lng) => {
    setPropsState({
      center: {
        lat,
        lng,
      },
      zoom: 15,
    });
    const { current = {} } = zoomReff;
    current.flyTo([lat, lng]);
  };
  return (
    <div ref={refParentSearch} className={styles.parentSearch}>
      <form onSubmit={serchFormHandler} className={styles.frmSearch}>
        <input
          value={valSearch}
          onClick={searchHandler}
          type="text"
          placeholder="جستجو"
          onChange={searchMap}
        />
        <div>
          <select>
            <option>جستجوی خیابان</option>
            <option>جستجوی اماکن</option>
          </select>
          <button type="submit" className={styles.search3}>
            <IoSearchSharp
              style={{ fontSize: "20px", color: "rgb(100, 116, 139)" }}
            />
          </button>
        </div>
      </form>
      <div ref={refSearch4} className={styles.search4} onMouseLeave={serchBlur}>
        <div className={styles.listArray}>
          {arrayLayers.map((item) => (
            <span onClick={markerHandler} key={item.id} id={item.id}>
              {item.text}
            </span>
          ))}
        </div>
        <div className={styles.searchList} ref={refBxSeechList}>
          {data.loading && (
            <p className={styles.pLoader}>
              <BeatLoader color="rgb(54, 215, 183)" size={8} />
            </p>
          )}
          {data.data?.result.map((item) => (
            <span
              key={item.id}
              onClick={() => mapZoom(item.latitude, item.longitude)}
            >
              {item.title_fa} <SlLocationPin />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
