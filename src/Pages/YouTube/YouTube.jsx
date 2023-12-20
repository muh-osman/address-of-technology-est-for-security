import useWindowDimensions from "../../utiles/useWindowDimensions";
// SCSS
import style from "./YouTube.module.scss";

export default function YouTube() {
  const { width } = useWindowDimensions();
  return (
    <div className={style.container}>
      <iframe
        className={style.iframe}
        src="https://www.youtube.com/embed/kg8zAnFFGDg?si=9-XsBtrxeo7NLSpn"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
