import layerImg from "../images/layerImg.jpg";

const arrayLayers = [
  {
    id: 0,
    img: layerImg,
    text: "تغذیه",
  },
  {
    id: 1,
    img: layerImg,
    text: "مرکز اقامتی و گردشگری",
  },
  {
    id: 2,
    img: layerImg,
    text: "خدمات شهری",
  },
  {
    id: 3,
    img: layerImg,
    text: "بهداشتی و درمانی",
  },
  {
    id: 4,
    img: layerImg,
    text: "خدمات اداری",
  },
  {
    id: 5,
    img: layerImg,
    text: "ورزشی",
  },
  {
    id: 6,
    img: layerImg,
    text: "مراکز آموزشی",
  },
  {
    id: 7,
    img: layerImg,
    text: "مراکز خرید",
  },
  {
    id: 8,
    img: layerImg,
    text: "حمل و نقل",
  },
  {
    id: 9,
    img: layerImg,
    text: "مراکز تفریح و سرکرمی",
  },
  {
    id: 10,
    img: layerImg,
    text: "بانک ها و بیمه ها",
  },
  {
    id: 11,
    img: layerImg,
    text: "خدمات ساختمانی",
  },
  {
    id: 12,
    img: layerImg,
    text: "خدمات آرایشی و بهداشتی",
  },
  {
    id: 13,
    img: layerImg,
    text: "مراکز فرهنگی و هنری ",
  },
  {
    id: 14,
    img: layerImg,
    text: "خذمات خودرو ",
  },
  {
    id: 15,
    img: layerImg,
    text: "خدمات ICT ",
  },
];

const tknReq = {
  password: "azar_lo",
  software_ver: "103",
  os_ver: "28",
  os: "android",
  software: "faragard",
  username: "azar_lo",
  hardware: "Basewin P1000",
  register_id: "",
};
const prgrsStep = (counter, prgrsArray, accgreen, acc, setCounter) => {
  const lengthprog = prgrsArray.length;
  if (counter <= lengthprog) {
    const find = prgrsArray.find((item) => item.id === counter);
    const filter = prgrsArray.filter((item) => item.id < counter);
    filter.map((item) => (item.img = accgreen));
    find.img = acc;
    setCounter((counter) => counter + 1);
  }
};
function year(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
const fnsrchandler = (data, srch, setData) => {
  const newDate = data.filter((item) => item == srch);
  // console.log(newDate);
  setData([...newDate]);
};

const monthName = [
  { id: 1, name: "فروردین" },
  { id: 2, name: "اردیبهشت" },
  { id: 3, name: "خرداد" },
  { id: 4, name: "تیر" },
  { id: 5, name: "مرداد" },
  { id: 6, name: "شهریور" },
  { id: 7, name: "مهر" },
  { id: 8, name: "آبان" },
  { id: 9, name: "آذر" },
  { id: 10, name: "دی" },
  { id: 11, name: "بهمن" },
  { id: 12, name: "اسفند" },
];
function days(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

function maping(data) {
  const items1 = data.map((item, index) => ({ id: index, name: item }));
  const obj1 = items1.splice(0, 25);

  const items2 = data.map((item, index) => ({ id: index, name: item }));
  const obj2 = items2.splice(25, 25);

  const items3 = data.map((item, index) => ({ id: index, name: item }));
  const obj3 = items3.splice(50, 25);

  const item4 = data.map((item, index) => ({ id: index, name: item }));
  const obj4 = item4.splice(75, 25);

  const item5 = data.map((item, index) => ({ id: index, name: item }));
  const obj5 = item5.splice(100, 25);

  const item6 = data.map((item, index) => ({ id: index, name: item }));
  const obj6 = item6.splice(125, 25);

  const item7 = data.map((item, index) => ({ id: index, name: item }));
  const obj7 = item7.splice(150, 25);

  const item8 = data.map((item, index) => ({ id: index, name: item }));
  const obj8 = item8.splice(175, 25);

  const res = { obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8 };
  return res;
}
const d = new Date();

const convertDate = () => {
  ////convertDate
  // Simple format
  // console.log(new Intl.DateTimeFormat("fa-IR").format(d));
  // => ۱۴۰۱/۱/۱

  // Full long format
  // console.log(
  //   new Intl.DateTimeFormat("fa-IR", {
  //     dateStyle: "full",
  //     timeStyle: "long",
  //   }).format(d)
  // );
  // => ۱۴۰۱ فروردین ۱, دوشنبه، ساعت ۰:۰۰:۰۰ (‎+۳:۳۰ گرینویچ)

  // Latin numbers
  // console.log(
  //   new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
  //     dateStyle: "full",
  //     timeStyle: "long",
  //   }).format(d)
  // );
  // => 1401 فروردین 1, دوشنبه، ساعت 0:00:00 (‎+3:30 گرینویچ)

  // English US locale with Persian calendar
  // console.log(
  //   new Intl.DateTimeFormat("en-US-u-ca-persian", {
  //     dateStyle: "full",
  //     timeStyle: "long",
  //   }).format(d)
  // );
  // => Monday, Farvardin 1, 1401 AP at 12:00:00 AM GMT+3:30

  // Just year
  // console.log(
  //   new Intl.DateTimeFormat("en-US-u-ca-persian", { year: "numeric" }).format(d)
  // );
  const convertToYear = new Intl.DateTimeFormat("en-US-u-ca-persian", {
    year: "numeric",
  }).format(d);
  const toYear = convertToYear.split(" ");
  return toYear[0];

  // => 1401 AP

  // Just month
  // console.log(
  //   new Intl.DateTimeFormat("en-US-u-ca-persian", { month: "short" }).format(d)
  // );
  // Farvardin

  // Just day
  // console.log(
  //   new Intl.DateTimeFormat("en-US-u-ca-persian", { day: "numeric" }).format(d)
  // );
};
const convertMonth = () => {
  const month = new Intl.DateTimeFormat("fa-IR").format(d);
  const monthsplit = month.split("/");
  let andis = monthsplit[1];
  return andis
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
};
let dateSelect = (y, m, d) => {
  return { year: y, m, d };
  // const date = {year : y , month : m , day :d}
  // return date
};
const today = () => {
  const tod = Intl.DateTimeFormat("fa-IR").format(d);
  const spl = tod.split("/");
  const yr = spl[0];
  const mnt = spl[1];
  const dy = spl[2];
  return [yr, mnt, dy];
};

const LayersCntl = [
  {
    id: "0",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    TileLayer: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    id: "1",
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    TileLayer:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  },
  {
    id: "2",
    attribution :'&copy; <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors',

 TileLayer:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
  },
  {
    id: "3",
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

    TileLayer:
      "https://tiles.stadiamaps.com/tiles/stamen_terrain_lines/{z}/{x}/{y}{r}.png",
  },
];
export {
  arrayLayers,
  tknReq,
  prgrsStep,
  year,
  monthName,
  fnsrchandler,
  days,
  maping,
  convertDate,
  dateSelect,
  convertMonth,
  today,
  LayersCntl,
};
