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

import { $mergeKeys } from "root/utils/general.utils";
import ScrollX from "root/components/ui/ScrollX/Index";
import { ROUTES } from "root/constants/routes.constants";
import PageHero from "root/components/modules/PageHero/Index";
import ScrollXContainer from "root/components/ui/ScrollX/Container";

const ArticlesDetailPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="container grid mt-9 grid-cols-4">
        <div className="f-align">
          <div className="size-20 f-center">
            <Calendar className="w-2/3" />
          </div>
          <div className="f-align h-10">
            <span className="text-xl font-vazir-bold">زمان انتشار مقاله</span>
            <span>۱۴۰۴/۰۱/۲۵</span>
          </div>
        </div>
      </div>

      <div className="card card-effect container">
        <div className="f-align group transition-colors hover:bg-foreground/10 card">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-lg font-vazir-bold">چگونه ای را به بی وصل کنیم؟</h2>

          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <button className="btn btn-fill">
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon" />
            </button>
          </Link>
        </div>

        <div className="f-align group transition-colors hover:bg-foreground/10 card">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-lg font-vazir-bold">مکانزیم عملکرد موتور ویویو</h2>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <button className="btn btn-fill">
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon" />
            </button>
          </Link>
        </div>

        <div className="f-align group transition-colors hover:bg-foreground/10 card">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-lg font-vazir-bold">الگروتیم BIG O</h2>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <button className="btn btn-fill">
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon" />
            </button>
          </Link>
        </div>

        <div className="f-align group transition-colors hover:bg-foreground/10 card">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-lg font-vazir-bold">الگوریتم جسجتجوی خودکار</h2>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <button className="btn btn-fill">
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon" />
            </button>
          </Link>
        </div>

        <div className="f-align group transition-colors hover:bg-foreground/10 card">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-lg font-vazir-bold">یکپارچه سازی با ساختار DDD + جمع بندی</h2>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <button className="btn btn-fill">
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon" />
            </button>
          </Link>
        </div>
      </div>

      <div className="container card bg-foreground/5 mt-9">
        <div className="f-align">
          <button className="btn btn-outline">
            <span>حالت خواندن</span>
            <ExpandIcon className="compatible-icon" />
          </button>
          <button className="btn btn-outline">
            <span>دانلود</span>
            <DownloadIcon className="compatible-icon" />
          </button>
          <button className="btn btn-outline">
            <span>اشتراک گذاری</span>
            <Share2Icon className="compatible-icon" />
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

        <div className="f-align flex-wrap" dir="ltr">
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Algorithms</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Design patterns</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Golang</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Web assembly</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Algorithms</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Design patterns</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Golang</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Web assembly</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Algorithms</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Design patterns</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Golang</span>
            </button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <button className="btn btn-ghost">
              <HashIcon className="compatible-icon" />
              <span>Web assembly</span>
            </button>
          </Link>
        </div>
      </div>

      <ScrollX className="container mt-9">
        <ScrollXContainer>
          {Array.from(new Array(7)).map(() => (
            <div className="card card-effect" key={Math.random()}>
              <div className="w-full aspect-video bg-foreground/10 rounded-lg" />

              <h2 className="text-xl font-vazir-bold mt-3">استفاده از تکنیک توسعه بر پایه دامنه</h2>
              <div className="badge mt-1.5">مهندسی نرم افزار</div>

              <p className="mt-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد{" "}
              </p>

              <Link className="w-full mt-3" href={$mergeKeys("/", [ROUTES.articles, 1])}>
                <button className="w-full btn btn-outline">
                  <span>بیشتر بخوانید</span>
                  <ArrowUpLeft className="compatible-icon" />
                </button>
              </Link>
            </div>
          ))}
        </ScrollXContainer>
      </ScrollX>
    </>
  );
};

export default ArticlesDetailPage;
