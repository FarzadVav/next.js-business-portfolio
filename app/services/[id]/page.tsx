import { PhoneIcon, SendHorizonalIcon, SparklesIcon, UserIcon } from "lucide-react";

import PageHero from "root/components/PageHero/Index";
import PageTitle from "root/components/modules/PageTitle/Index";

const ServicesDetailPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="container grid grid-cols-3 gap-3 mt-9">
        {Array.from(new Array(6)).map(() => (
          <div className="card-effect" key={Math.random()}>
            <div className="size-12 bg-success-5 text-success-1 p-3 rounded-full f-center">
              <SparklesIcon className="size-full text-success" />
            </div>
            <h2 className="text-lg mt-3 font-vazir-bold">پشتیانی ۶ ماهه</h2>
            <p className="mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        ))}
      </div>

      <div className="container mt-6">
        <h3 className="text-lg font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <p className="mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <h3 className="text-lg mt-6 font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <p className="mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <h3 className="text-lg mt-6 font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <p className="mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>

      <PageTitle className="mt-9">
        <h4>ثبت پروژه حرفه ای شما</h4>
      </PageTitle>
      <div className="card-effect container mt-6">
        <div className="f-align gap-3">
          <label className="input-outline">
            <input className="input-field" placeholder="نام و نام خانوادگی" />
            <UserIcon className="btn-icon-size" />
          </label>
          <label className="input-outline" dir="ltr">
            <input className="input-field" placeholder="09*********" />
            <PhoneIcon className="btn-icon-size" />
          </label>
        </div>
        <label className="input-outline mt-3">
          <textarea className="input-field" placeholder="شرح درخواست شما..." />
        </label>
        <button className="mt-3 btn-fill">
          <span>ثبت درخواست</span>
          <SendHorizonalIcon className="btn-icon-size -scale-x-100" />
        </button>
      </div>
    </>
  );
};

export default ServicesDetailPage;
