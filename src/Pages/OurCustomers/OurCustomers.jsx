// Icons
import { IoHome } from "react-icons/io5";
import { IoBusiness } from "react-icons/io5";
import { RiGovernmentFill } from "react-icons/ri";
// SCSS
import style from "./OurCustomers.module.scss";

export default function OurCustomers() {
  return (
    <div className={style.container}>
      <h1>عملائنا</h1>

      <div className={style.box}>
        <div>
          <RiGovernmentFill className={style.icon} />
          <h2>القطاع الحكومي</h2>
          <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
        </div>

        <div>
          <IoBusiness className={style.icon} />
          <h2>الشركات</h2>
          <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
        </div>

        <div>
          <IoHome className={style.icon} />
          <h2>الأفراد</h2>
          <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
        </div>

      </div>
    </div>
  );
}
