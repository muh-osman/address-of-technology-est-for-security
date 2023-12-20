import useWindowDimensions from "../../utiles/useWindowDimensions";
// SCSS
import style from "./Map.module.scss";

export default function Map() {
  const { width } = useWindowDimensions();

  return (
    <div className={style.container} id="contact">
      <div className={style.form_box}>
        <h1>تواصل معنا</h1>
        <form>
          {/* الاسم */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              الاسم
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>
          {/* رقم الهاتف */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              رقم الهاتف
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {/* المدينة */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              المدينة
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          {/* ملاحظات */}
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="exampleFormControlTextarea1">ملاحظات</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      <div className={style.map_box}>
        <iframe
          title={"map"}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3711.7672413320265!2d39.1858421!3d21.5168351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb97bd976db%3A0x48337452511ac49!2z2LnZhtmI2KfZhiDYp9mE2KrZg9mE2YjZhtis2YrYpw!5e0!3m2!1sar!2s!4v1703021514003!5m2!1sar!2s"
          width={width > 575 ? width / 2 : 350}
          height={width > 575 ? width / 2.6 : 350}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
