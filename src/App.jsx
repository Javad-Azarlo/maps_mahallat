import { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar";
import Location from "./components/Location";
import { LayersCntl } from "./services/instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Latlang from "./components/Latlang";
// import MinimapControl from "./components/MinimapControl"
import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "../node_modules/leaflet/dist/leaflet.css";
import { useScreenshot, createFileName } from "use-react-screenshot";

import Zoom from "./components/Zoom";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L, { marker } from "leaflet";

import { getPostion } from "./services/serviceFunc";
import "./fonts/fonts.css";
import PopUpModal from "./components/PopUpModal";
import "../node_modules/leaflet.fullscreen/Control.FullScreen";
import { getCookie } from "./utils/cookie";
import { category_sub } from "./services/funcRequest";

import Side from "./modules/Side";
import "./App.css";
import { tokenData } from "./services/funcRequest";
import { tknReq } from "./services/instance";
import toastContainer from "./services/toast";
// import { FullscreenControl } from "react-leaflet-fullscreen";
// import "react-leaflet-fullscreen/styles.css";

import "react-leaflet-fullscreen/styles.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

function App() {
  const [isloading, setIsLoading] = useState(false);
  const [postion, setPostion] = useState(null);
  const [error, setError] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSideBar, setSideBar] = useState(false);
  const [layers, setLayers] = useState({ loading: false, data: null });
  //state mouseMove latLng
  const [mousMoveLat, setMousMoveLat] = useState(null);
  const [coords, setCoords] = useState({});

  useEffect(() => {
    if (!mousMoveLat) return;

    mousMoveLat.addEventListener("mousemove", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [mousMoveLat]);

  /////////////
  //downloadscrrenshoot

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(mousMoveLat).then(download);
  // console.log("mousMoveLat" , mousMoveLat)
  ///////
  const [layCtrl, setLayCtrl] = useState({
    id: "0",
    // name: "Open Street Map",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    TileLayer: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  });
  // const [mapType, setMapType] = useState(0);
  const [propsState, setPropsState] = useState({
    center: {
      lat: 33.56999071788762,
      lng: 50.81053537302507,
    },
    zoom: 13,
  });
  const [popUp, setPopUp] = useState({
    Coordinate: true,
    layers: false,
  });
  const mapRed = useRef(null);
  const zoomReff = useRef();
  useEffect(() => {
    tokenData(tknReq);
  });

  // const { token } = tkn;
  useEffect(() => {
    const layersHandler = async () => {
      // setLayers({ loading: true, data: null });
      const { token } = getCookie();
      const res = await category_sub({
        id: "0",
        // cas_id: "2d3b59e316cae28930ab79ad250b5962e4d523a3",
        cas_id: `${token}`,
      });
      setLayers({ loading: false, data: res });
      // setLayers({ loading: false, data: res });
    };
    layersHandler();
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      mapRed.current.style.opacity = "0.7";
    } else {
      mapRed.current.style.opacity = "1";
    }
  }, [isPopupOpen]);

  const currentHandler = async () => {
    const res = await getPostion(
      setError,
      setIsLoading,
      setPostion,
      isloading,
      error,
      postion
    );
    console.log(res);
    if (res.error) {
      toastContainer("error", res.error);
    } else if (!res.postion) return;
    else {
      setPropsState(res.postion);
      // const { current = {} } = zoomReff;
      mousMoveLat.flyTo([postion?.center.lat, postion?.center.lng]);
    }
  };
  const mousOverHandler = () => {
    getPostion(setError, setIsLoading, setPostion, isloading, error, postion);
    console.log("mouse");
  };
  const typeModal = (e) => {
    let mapType = e.target.id;
    const newLayer = LayersCntl.find((item) => item.id === mapType);
    setLayCtrl(newLayer);
  };
  const layersHandler = () => {};
  return (
    <>
      {isPopupOpen && (
        <PopUpModal
          setPropsState={setPropsState}
          setPopupOpen={setPopupOpen}
          // zoomReff={zoomReff}
          mousMoveLat={mousMoveLat}
          popUp={popUp}
          setPopUp={setPopUp}
          typeModal={typeModal}
        />
      )}
      {isSideBar && (
        <Side
          layers={layers}
          setSideBar={setSideBar}
          currentHandler={currentHandler}
          isloading={isloading}
          // zoomReff={zoomReff}
          downloadScreenshot={downloadScreenshot}
          typeModal={typeModal}
        />
      )}
      <div
        ref={mapRed}
        style={{ height: "100vh", width: "100%", position: "relative" }}
      >
        <MapContainer
          // ref={zoomReff}
          ref={setMousMoveLat}
          center={[propsState.center.lat, propsState.center.lng]}
          zoom={13}
          style={{ height: "100vh", width: "100vw" }}
          attributionControl={true}
          zoomControl={false}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          fullscreenControl={true}
        >
          <TileLayer
            attribution={layCtrl.attribution}
            onmouseover={mousOverHandler}
            url={layCtrl.TileLayer}
          />
          <Marker position={[propsState.center.lat, propsState.center.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {/* <MinimapControl position="topright" /> */}
          <ZoomControl position="bottomleft" />
          {/* <FullscreenControl /> */}
        </MapContainer>

        <div className="sideBar">
          <SideBar
            setPropsState={setPropsState}
            mousMoveLat={mousMoveLat}
            setSideBar={setSideBar}
            layersHandler={layersHandler}
          />
        </div>
        <div className="zoom">
          <Zoom setPopupOpen={setPopupOpen} />
        </div>
        <div className="latlong">
          <Latlang propsState={propsState} coords={coords} />
        </div>
        <div className="location">
          <Location
            isloading={isloading}
            error={error}
            postion={postion}
            currentHandler={currentHandler}
            setPopUp={setPopUp}
            setPopupOpen={setPopupOpen}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
