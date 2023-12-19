// Sass
import style from "./Banar.module.scss";
// Icons
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareSnapchat,
} from "react-icons/fa6";

export default function Banar() {
  return (
    <div className={style.container}>
      <div>
        <a dir="rtl" className={style.tel} href="tel:+966559424388">
          <span>إتصل بنا: </span>
          <span dir="ltr">+(966)55 942 4388</span>
        </a>
      </div>

      <div className={style.social}>
      <a href="https://twitter.com/AddressofTechn1">
          <FaSquareXTwitter />
        </a>

        <a href="https://www.instagram.com/info.2011">
          <FaSquareInstagram />
        </a>

        <a href="#">
          <FaSquareSnapchat />
        </a>
      </div>
    </div>
  );
}
