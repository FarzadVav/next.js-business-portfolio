import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowUpLeft,
  Calendar,
  DownloadIcon,
  ExpandIcon,
  HashIcon,
  Share2Icon,
  SparklesIcon,
} from "lucide-react";

import ScrollX from "root/components/ui/ScrollX/Index";
import { ROUTES } from "root/constants/routes.constants";
import PageHero from "root/components/modules/PageHero/Index";
import PageTitle from "root/components/modules/PageTitle/Index";
import ScrollXContainer from "root/components/ui/ScrollX/Container";

const ArticlesDetailPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="استراتژی های استفاده از GPT"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="container grid mt-9 grid-cols-4">
        <div className="f-align gap-3">
          <div className="size-16 f-center bg-foreground-5 rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex gap-1.5 flex-col h-10">
            <span className="text-lg font-vazir-bold">زمان انتشار مقاله</span>
            <span className="text-sm">۱۴۰۴/۰۱/۲۵</span>
          </div>
        </div>

        <div className="f-align gap-3">
          <div className="size-16 f-center bg-foreground-5 rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex gap-1.5 flex-col h-10">
            <span className="text-lg font-vazir-bold">زمان انتشار مقاله</span>
            <span className="text-sm">۱۴۰۴/۰۱/۲۵</span>
          </div>
        </div>

        <div className="f-align gap-3">
          <div className="size-16 f-center bg-foreground-5 rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex gap-1.5 flex-col h-10">
            <span className="text-lg font-vazir-bold">زمان انتشار مقاله</span>
            <span className="text-sm">۱۴۰۴/۰۱/۲۵</span>
          </div>
        </div>

        <div className="f-align gap-3">
          <div className="size-16 f-center bg-foreground-5 rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex gap-1.5 flex-col h-10">
            <span className="text-lg font-vazir-bold">زمان انتشار مقاله</span>
            <span className="text-sm">۱۴۰۴/۰۱/۲۵</span>
          </div>
        </div>
      </div>

      <div className="card-effect container mt-9">
        <div className="f-align gap-3 group transition-colors hover:bg-foreground-6 card">
          <SparklesIcon className="btn-icon-size" />
          <h2 className="text-lg font-vazir-bold">چگونه ای را به بی وصل کنیم؟</h2>

          <Link href={"#"} className="btn-ghost mr-auto group/btn">
            <span className="opacity-0 transition-opacity group-focus/btn:opacity-100 group-hover:opacity-100">
              مطالعه
            </span>
            <ArrowDownIcon className="btn-icon-size" />
          </Link>
        </div>

        <div className="f-align gap-3 group transition-colors hover:bg-foreground-6 card">
          <SparklesIcon className="btn-icon-size" />
          <h2 className="text-lg font-vazir-bold">مکانزیم عملکرد موتور ویویو</h2>
          <Link href={"#"} className="btn-ghost mr-auto group/btn">
            <span className="opacity-0 transition-opacity group-focus/btn:opacity-100 group-hover:opacity-100">
              مطالعه
            </span>
            <ArrowDownIcon className="btn-icon-size" />
          </Link>
        </div>

        <div className="f-align gap-3 group transition-colors hover:bg-foreground-6 card">
          <SparklesIcon className="btn-icon-size" />
          <h2 className="text-lg font-vazir-bold">الگروتیم BIG O</h2>
          <Link href={"#"} className="btn-ghost mr-auto group/btn">
            <span className="opacity-0 transition-opacity group-focus/btn:opacity-100 group-hover:opacity-100">
              مطالعه
            </span>
            <ArrowDownIcon className="btn-icon-size" />
          </Link>
        </div>

        <div className="f-align gap-3 group transition-colors hover:bg-foreground-6 card">
          <SparklesIcon className="btn-icon-size" />
          <h2 className="text-lg font-vazir-bold">الگوریتم جسجتجوی خودکار</h2>
          <Link href={"#"} className="btn-ghost mr-auto group/btn">
            <span className="opacity-0 transition-opacity group-focus/btn:opacity-100 group-hover:opacity-100">
              مطالعه
            </span>
            <ArrowDownIcon className="btn-icon-size" />
          </Link>
        </div>

        <div className="f-align gap-3 group transition-colors hover:bg-foreground-6 card">
          <SparklesIcon className="btn-icon-size" />
          <h2 className="text-lg font-vazir-bold">یکپارچه سازی با ساختار DDD + جمع بندی</h2>
          <Link href={"#"} className="btn-ghost mr-auto group/btn">
            <span className="opacity-0 transition-opacity group-focus/btn:opacity-100 group-hover:opacity-100">
              مطالعه
            </span>
            <ArrowDownIcon className="btn-icon-size" />
          </Link>
        </div>
      </div>

      <div className="container bg-foreground-6 card mt-9">
        <div className="f-align gap-3">
          <button className="btn-outline">
            <span>حالت خواندن</span>
            <ExpandIcon className="btn-icon-size" />
          </button>
          <button className="btn-outline">
            <span>دانلود</span>
            <DownloadIcon className="btn-icon-size" />
          </button>
          <button className="btn-outline">
            <span>اشتراک گذاری</span>
            <Share2Icon className="btn-icon-size" />
          </button>
        </div>

        <p className="mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
          متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
          کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
          تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
          اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
          توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
          زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
          فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
          علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
          مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
          طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
          و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
          حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
          طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
          باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
          فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
          در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
          متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
          کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
          تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
          اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
          توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
          زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
          فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
          علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
          مورد استفاده قرار گیرد.
        </p>

        <div className="f-align flex-wrap mt-6 gap-1.5" dir="ltr">
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Algorithms</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Design patterns</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Golang</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Web assembly</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Algorithms</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Design patterns</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Golang</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Web assembly</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Algorithms</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Design patterns</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Golang</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn-ghost">
              <HashIcon className="btn-icon-size" />
              <span>Web assembly</span>
            </button>
          </Link>
        </div>
      </div>

      <PageTitle className="mt-9">
        <h3>مقالات مرتبط با - استراتژی های استفاده از GPT</h3>
      </PageTitle>
      <ScrollX className="container mt-6">
        <ScrollXContainer>
          {Array.from(new Array(7)).map(() => (
            <div className="w-2/5 card-effect min-w-2/5" key={Math.random()}>
              <div className="w-full aspect-video bg-foreground-5 rounded-lg" />

              <h4 className="text-xl mt-3 font-vazir-bold">استفاده از توسعه بر پایه دامنه</h4>

              <div className="badge mt-3">مهندسی نرم افزار</div>

              <p className="mt-3 line-clamp-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </p>

              <Link className="mt-6 btn-outline" href={ROUTES.articles + "/1"}>
                <span>بیشتر بخوانید</span>
                <ArrowUpLeft className="btn-icon-size" />
              </Link>
            </div>
          ))}
        </ScrollXContainer>
      </ScrollX>
    </>
  );
};

export default ArticlesDetailPage;
