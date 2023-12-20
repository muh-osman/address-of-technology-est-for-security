import style from "./Partners.module.scss";
// Images
import cam1 from "../../assets/images/cam1.jpg";
import cam2 from "../../assets/images/cam2.jpg";
import cam3 from "../../assets/images/cam3.jpg";
import cam4 from "../../assets/images/cam4.jpg";
import cam5 from "../../assets/images/cam5.jpg";
import cam6 from "../../assets/images/cam6.jpg";
import cam7 from "../../assets/images/cam7.jpg";
import cam8 from "../../assets/images/cam8.jpg";

export default function Partners() {
  return (
    <div className={style.container} id="partners">
      <h1>شركاء النجاح</h1>

      <div className={style.box}>
        <div>
          <img src={cam1} alt="camera" />
          <h3>Dahua</h3>
        </div>

        <div>
          <img src={cam2} alt="camera" />
          <h3>Evoko</h3>
        </div>

        <div>
          <img src={cam3} alt="camera" />
          <h3>Ezviz</h3>
        </div>

        <div>
          <img src={cam4} alt="camera" />
          <h3>Hikvision</h3>
        </div>

        <div>
          <img src={cam5} alt="camera" />
          <h3>LDA Audio Tech</h3>
        </div>

        <div>
          <img src={cam6} alt="camera" />
          <h3>Opticon</h3>
        </div>

        <div>
          <img src={cam7} alt="camera" />
          <h3>Ozak</h3>
        </div>

        <div>
          <img src={cam8} alt="camera" />
          <h3>Panasonic</h3>
        </div>
      </div>
    </div>
  );
}
