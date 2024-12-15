import Switch from "react-switch";
import { useState } from "react";
import styles from "../components/lat&lang.module.css";

function Latlang({ propsState, coords }) {
  const { center } = propsState;
  const { lng, lat } = coords;
  const [check, setCheck] = useState(false);
  const handleChange = () => {
    setCheck((check) => !check);
  };

  return (
    <div className="div6">
      <p className={styles.div6P}>
        {!check && (
          <>
            lang : <span>{lng ? lng?.toFixed(6) : center.lng}</span>
            lat : <span>{lat ? lat?.toFixed(6) : center.lat}</span>
          </>
        )}
        <Switch
          onChange={handleChange}
          checked={check}
          width={70}
          height={20}
          uncheckedIcon={<span className={styles.utm}>utm</span>}
          checkedIcon={<span className={styles.latlng}>latlng</span>}
          onColor="#87e1bb"
          offColor="#ccc"
          // offHandleColor="#fff"
          // onHandleColor="#3b82f6"
        />
      </p>
    </div>
  );
}

export default Latlang;
