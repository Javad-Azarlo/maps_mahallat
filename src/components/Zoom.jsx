import { GrZoomIn } from "react-icons/gr";
import styles from "./zoom.module.css";
function Zoom({ setPopupOpen }) {
  return (
    <div className={styles.zoomBox} onClick={() => setPopupOpen(true)}>
      <GrZoomIn  size={19}/>
    </div>
  );
}

export default Zoom;
