// SASS
import style from "./Footer.module.scss";
// Icons
import {
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
// qr code 
import qr from "../../assets/images/qr.png"

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.about_box}>
        <div className={style.text_box}>
          <h1>مؤسسة عنوان التكنولوجيا الأمنية</h1>
          <p>
            نقدم حلول الأمن لعملائنا منذ 7 سنوات. نعمل كنظام متكامل يحافظ على
            علاقات استراتيجية مع مجموعة متنوعة من مقدمي التكنولوجيا والخدمات
            الرائدة، وهو عامل تمكين حاسم في قدرتنا على تقديم أفضل الحلول التقنية
            لعملائنا باستمرار. بدعم من قاعدة الموردين متعددة الجنسيات
          </p>
        </div>

        <div className={style.social_and_qr_box}>

        <div className={style.qr_box}>
            <img src={qr} alt="qr code" />
          </div>

          <div className={style.social_box}>

          <a href="https://twitter.com/AddressofTechn1">
              Twitter <FaSquareInstagram />
            </a>

            <a href="https://www.instagram.com/info.2011">
              Instagram <FaSquareXTwitter />
            </a>

            <a  dir="ltr" href="https://wa.me/+966559424388">
            +(966)55 942 4388
            </a>
          </div>



        </div>
      </div>

      <p className={style.copy_right}>
        جميع الحقوق محفوظة لمؤسسة عنوان التكنولوجيا للأنظمة الأمنية - سجل تجاري
        4030369758
      </p>
    </footer>
  );
}
