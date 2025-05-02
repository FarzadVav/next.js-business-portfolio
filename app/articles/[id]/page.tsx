import Link from "next/link";
import {
  ArrowDownIcon,
  Calendar,
  DownloadIcon,
  ExpandIcon,
  HashIcon,
  Share2Icon,
  SparklesIcon,
} from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Button from "root/components/ui/Button/Index";
import Heading from "root/components/ui/Heading/Index";
import { ROUTES } from "root/constants/routes.constants";
import Paragraph from "root/components/ui/Paragraph/Index";
import PageHero from "root/components/modules/PageHero/Index";

const ArticlesDetailPage = () => {
  return (
    <>
      <Space />
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <Space />
      <div className="container grid grid-cols-4">
        <Flex>
          <div className="size-20 center-items">
            <Calendar className="w-2/3" />
          </div>
          <div className="h-20">
            <Flex className="h-1/2">
              <Heading font="vazir">زمان انتشار مقاله</Heading>
            </Flex>
            <Flex className=" h-1/2">۱۴۰۴/۰۱/۲۵</Flex>
          </div>
        </Flex>
        <Flex>
          <div className="size-20 center-items">
            <Calendar className="w-2/3" />
          </div>
          <div className="h-20">
            <Flex className="h-1/2">
              <Heading font="vazir">دسته بندی</Heading>
            </Flex>
            <Flex className=" h-1/2">۱۴۰۴/۰۱/۲۵</Flex>
          </div>
        </Flex>
        <Flex>
          <div className="size-20 center-items">
            <Calendar className="w-2/3" />
          </div>
          <div className="h-20">
            <Flex className="h-1/2">
              <Heading font="vazir">هدف خواندن</Heading>
            </Flex>
            <Flex className=" h-1/2">۱۴۰۴/۰۱/۲۵</Flex>
          </div>
        </Flex>
        <Flex>
          <div className="size-20 center-items">
            <Calendar className="w-2/3" />
          </div>
          <div className="h-20">
            <Flex className="h-1/2">
              <Heading font="vazir">زمان مورد نیاز</Heading>
            </Flex>
            <Flex className=" h-1/2">۱۴۰۴/۰۱/۲۵</Flex>
          </div>
        </Flex>
      </div>

      <Space />
      <Box className="container">
        <Flex className="group transition-colors hover:bg-foreground/10 p-3 rounded-lg">
          <SparklesIcon className="compatible-icon-size" />
          <Heading size="xs">
            <h2>چگونه ای را به بی وصل کنیم؟</h2>
          </Heading>

          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <Button>
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>

        <Flex className="group transition-colors hover:bg-foreground/10 p-3 rounded-lg">
          <SparklesIcon className="compatible-icon-size" />
          <Heading size="xs">
            <h2>مکانزیم عملکرد موتور ویویو</h2>
          </Heading>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <Button>
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>

        <Flex className="group transition-colors hover:bg-foreground/10 p-3 rounded-lg">
          <SparklesIcon className="compatible-icon-size" />
          <Heading size="xs">
            <h2>الگروتیم BIG O</h2>
          </Heading>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <Button>
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>

        <Flex className="group transition-colors hover:bg-foreground/10 p-3 rounded-lg">
          <SparklesIcon className="compatible-icon-size" />
          <Heading size="xs">
            <h2>الگوریتم جسجتجوی خودکار</h2>
          </Heading>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <Button>
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>

        <Flex className="group transition-colors hover:bg-foreground/10 p-3 rounded-lg">
          <SparklesIcon className="compatible-icon-size" />
          <Heading size="xs">
            <h2>یکپارچه سازی با ساختار DDD + جمع بندی</h2>
          </Heading>
          <Link className="mr-auto opacity-0 transition-opacity group-hover:opacity-100" href={"#"}>
            <Button>
              <span>مطالعه</span>
              <ArrowDownIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>
      </Box>

      <Space />
      <Box className="container bg-foreground/5">
        <Flex>
          <Button shape="outline">
            <span>حالت خواندن</span>
            <ExpandIcon className="compatible-icon-size" />
          </Button>
          <Button shape="outline">
            <span>دانلود</span>
            <DownloadIcon className="compatible-icon-size" />
          </Button>
          <Button shape="outline">
            <span>اشتراک گذاری</span>
            <Share2Icon className="compatible-icon-size" />
          </Button>
        </Flex>

        <Space size="normal" />

        <Paragraph>
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
        </Paragraph>

        <Space size="normal" />

        <Flex wrap="wrap" dir="ltr">
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Algorithms</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Design patterns</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Golang</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Web assembly</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Algorithms</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Design patterns</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Golang</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Web assembly</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Algorithms</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Design patterns</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Golang</span>
            </Button>
          </Link>
          <Link href={ROUTES.articles + `?tag=${1}`}>
            <Button shape="ghost">
              <HashIcon className="compatible-icon-size" />
              <span>Web assembly</span>
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default ArticlesDetailPage;
