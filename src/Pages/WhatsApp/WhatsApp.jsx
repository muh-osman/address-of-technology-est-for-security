import whatsappIcon from '../../assets/images/whatsapp-icon.png'
// Icon
import style from "./WhatsApp.module.scss";
export default function WhatsApp() {
  return (
    <a href="https://wa.me/+966559424388" className={style.whatsapp_icon}>
        <img src={whatsappIcon} alt="whatsapp logo" />
    </a>
  )
}
