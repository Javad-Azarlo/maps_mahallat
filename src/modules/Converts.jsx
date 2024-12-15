import { SlMap } from "react-icons/sl";
import { useEffect } from "react";
import { conversions } from "../services/funcRequest";
import { getCookie } from "../utils/cookie";
import styles from "./converts.module.css";
function Converts() {
  useEffect(() => {
    const { token } = getCookie();
    conversions({
      data_json:
        '[{"input":"rencode","output":"aparteman","value":"5-13-10-14","aparteman":""}]',
        // cas_id: "2d3b59e316cae28930ab79ad250b5962e4d523a3",

      cas_id: `${token}`,
    });
  });
  return (
    <div className={styles.converting}>
      <ul>
        <li>
          <span>
            موقعیت به آدرس <SlMap />
          </span>
        </li>
        <li>
          <span>
            موقعیت به کد نوسازی <SlMap />
          </span>
        </li>
        <li>
          <span>
            آدرس به موقعیت <SlMap />
          </span>
        </li>
        <li>
          <span>
            کدنوسازی به موقعیت <SlMap />
          </span>
        </li>
        <li>
          <span>
            کدنوسازی به کد پستی <SlMap />
          </span>
        </li>
        <li>
          <span>
            کدپستی به موقعیت <SlMap />
          </span>
        </li>
        <li>
          <span>
            کدپستی به کد نوسازی <SlMap />
          </span>
        </li>
        <li>
          <span>
            کدپستی به آدرس <SlMap />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Converts;
