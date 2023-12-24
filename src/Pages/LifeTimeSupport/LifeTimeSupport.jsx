import style from './LifeTimeSupport.module.scss'
// Image
import man from "../../assets/images/man.jpg"

export default function LifeTimeSupport() {
  return (
    <div className={style.container}>
        <div>
            <img src={man} alt="LifeTimeSupport" />
        </div>

        <div className={style.text_box}>
            <h1>دعم مدى الحياة لنظامك الأمني</h1>
            <p>نقدم مجموعة كاملة من ضمانات الأجهزة وخيارات الدعم. باعتبارنا متخصصين في تركيب كاميرات المراقبة، فإن تركيب معدات كاميرات المراقبة الخاصة بنا مدعومة بضمان ودعم فني وتقني متميز.</p>
        </div>
    </div>
  )
}
