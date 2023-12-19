import style from "./About.module.scss";

export default function About() {
  return (
    <>
      <div className={style.container}>
        <h1>مرحبا بكم في مؤسسة عنوان التكنولوجيا الأمنية</h1>
        <p>
          نقدم حلول الأمن لعملائنا منذ 7 سنوات. نعمل كنظام متكامل يحافظ على
          علاقات استراتيجية مع مجموعة متنوعة من مقدمي التكنولوجيا والخدمات
          الرائدة، وهو عامل تمكين حاسم في قدرتنا على تقديم أفضل الحلول التقنية
          لعملائنا باستمرار. بدعم من قاعدة الموردين متعددة الجنسيات
        </p>

        <a href="">تواصل معنا</a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={style.section_down_arrow}
      >
        <polygon fill="#ee5057" points="0,0  100,0  50,50" />
      </svg>
    </>
  );
}
