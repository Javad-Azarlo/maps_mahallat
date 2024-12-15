import { MoonLoader, PropagateLoader } from "react-spinners";
// import { category } from "../services/funcRequest";
import { arrayLayers } from "../services/instance";
import styles from "./layers.module.css";
function Layers({ categ, categoryHandler }) {
  console.log("categ", categ);
  const [load, array ] = categ;
  const { loading } = load;
  const { data } = array;
  // console.log("dat22a", data?.result);
  return (
    <div className={styles.layesrBox}>
      {loading ? (
        <div>
          <PropagateLoader color="rgb(54, 215, 183)" />
        </div>
      ) : (
        <ul>
          {data.result?.map((item) => (
            <li key={item.id} onClick={categoryHandler}>
              <p>
                <img src={item.icons} alt={item.title_fa} id={item.id} />
                <span id={item.id}>{item.title_fa}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
     </div>
  );
}

export default Layers;
