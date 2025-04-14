import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import Box from "root/components/ui/Box/Index";
import Button from "root/components/ui/Button/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";

const ServicesDetailPage = () => {
  return (
    <>
      <Space />

      <Flex className="container" space="lg">
        <div className="size-44 min-w-44 rounded-full bg-foreground/10"></div>

        <div>
          <h1 className="text-xl font-kalameh-black leading-relaxed">
            پیاده سازی اپلیکیشن سمت سرور
          </h1>
          <Space size="sm" />
          <p>
            لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
            شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
            طراحان رایانه ای...
          </p>
        </div>
      </Flex>

      <Space />

      <div className="container grid grid-cols-3 gap-3">
        {Array.from(new Array(6)).map(() => (
          <Box key={Math.random()}>
            <div className="size-12 bg-success/10 p-3 rounded-full center-items">
              <DynamicIcon name="sparkles" className="size-full text-success" />
            </div>
            <Space size="sm" />
            <h2 className="text-lg font-vazir-black">پشتیانی ۶ ماهه</h2>
            <Space size="xs" />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </Box>
        ))}
      </div>

      <Space />

      <div className="container">
        <h3 className="text-xl font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <Space size="sm" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <Space />
        <h3 className="text-xl font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <Space size="sm" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <Space />
        <h3 className="text-xl font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <Space size="sm" />
        <p>
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

      <Space />

      <Flex className="container" wrap="wrap" justify="center">
        {Array.from(new Array(12)).map(() => (
          <Link href={"https://melktoday.ir"}>
            <Button shape="outline">
              <span>پروژه مدیریت املاک</span>
              <DynamicIcon name="arrow-left" className="compatible-icon-size" />
            </Button>
          </Link>
        ))}
      </Flex>

      <Space />

      <Box className="container">
        <h4 className="text-2xl font-kalameh-black text-center">ثبت پروژه حرفه ای شما</h4>
      </Box>
    </>
  );
};

export default ServicesDetailPage;
