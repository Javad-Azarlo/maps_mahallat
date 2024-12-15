import React from "react";
import Coordinates from "../modules/Coordinates";
import LayersControl from "../modules/LayersControl";
import styles from "./PopUpModal.module.css";
function PopUpModal({
  setPopupOpen,
  mousMoveLat,
  // zoomReff,
  setPropsState,
  popUp,
  setPopUp,
  typeModal,
}) {
  return (
    <div className={styles.popup}>
      {popUp.Coordinate ? (
        <Coordinates
          setPopupOpen={setPopupOpen}
          // zoomReff={zoomReff}
          mousMoveLat={mousMoveLat}
          setPropsState={setPropsState}
        />
      ) : (
        <LayersControl
          typeModal={typeModal}
          setPopupOpen={setPopupOpen}
          setPopUp={setPopUp}
        />
      )}
    </div>
  );
}

export default PopUpModal;
