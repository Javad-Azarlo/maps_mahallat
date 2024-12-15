import layerLight from "../images/layerLight.png";
import layerNight from "../images/layerNight.png";
import layernight1 from "../images/layernight1.png";

import styles from "./typesMap.module.css"
function TypesMap() {
  return (
    <>
      <div className={styles.bx} id="0">
        نقشه نمای روز
        <img src={layerLight} id="0" />
      </div>
      <div className={styles.bx} id="1">
        نقشه نمای شب
        <img id="1" src={layernight1} />
      </div>
      <div className={styles.bx} id="2">
        نقشه نمای ماهواره ای
        <img id="2" src={layerNight} />
      </div>
      <div className={styles.bx} id="3">
        نقشه نمای شب ماهواره ای
        <img id="3ّ" src={layernight1} />
      </div>
    </>
  );
}

export default TypesMap;
