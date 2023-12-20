import style from "./Pdf.module.scss";
//
import pdf1 from "../../assets/images/pdf1.jpg";
// import pdf2 from "../../assets/images/pdf2.jpg";

export default function Pdf() {
  return (
    <div className={style.container}>
      <img src={pdf1} alt="pdf" />
      {/* <img src={pdf2} alt="pdf" /> */}
    </div>
  );
}
