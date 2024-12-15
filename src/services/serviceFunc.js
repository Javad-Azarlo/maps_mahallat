function getPostion(
  setError,
  setIsLoading,
  setPostion,
  isloading,
  error,
  postion
) {
  if (!navigator.geolocation)
    return setError("Geolocation is not supported by this browser");

  setIsLoading(true);
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setPostion({
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        },
        zoom: 12,
      });
      setIsLoading(false);
    },
    (error) => {
      setError(error.message);
      setIsLoading(false);
    }
  );
  // console.log(isloading, error, postion, getPostion)
  return { isloading, error, postion, getPostion };
}
const nightPallet = (r) => {
  r.style.setProperty("--backWhite", "rgb(30,41,59)");
  r.style.setProperty("--backa7f3d0", "rgb(51,65,85)");
  r.style.setProperty("--clr065c44", "#fff");
  r.style.setProperty("--backc1f7de", "rgba(51,65,85, 0.7)");
  r.style.setProperty("--clr065c44", "#fff");
  r.style.setProperty("--clrMenu", "#fff");
};
const lightPallet = (r) => {
  r.style.setProperty("--backWhite", "#fff");
  r.style.setProperty("--backa7f3d0", "#a7f3d0");
  r.style.setProperty("--clr065c44", "#065c44");
  r.style.setProperty("--backc1f7de", "#c1f7de");
  r.style.setProperty("--clr065c44", "#065c44");
  r.style.setProperty("--clrMenu", "rgb(51,65,85)ّ");
};
export { getPostion, lightPallet, nightPallet };
