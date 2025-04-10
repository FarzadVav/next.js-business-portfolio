import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Input from "root/components/ui/Input/Index";
import Button from "root/components/ui/Button/Index";
import InputWrapper from "root/components/ui/Input/Wrapper";
import HeroSection from "root/components/templates/HeroSection/Index";

const HomePage = () => {
  return (
    <>
      <Space />

      <div className="container relative">
        <HeroSection />

        <h1 className="text-4xl font-kalameh-black text-center leading-relaxed">
          مکانی برای برنامه نویسی وب <br /> برای خدمات و آموزش با ما همراه باشید
        </h1>
        <p className="mt-6 w-3/4 text-center mx-auto">
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
          طراحان رایانه ای...
        </p>
        <InputWrapper className="w-1/2 mx-auto mt-6" htmlFor="global-search">
          <Input placeholder="جستجوی هرچی میخوای..." id="global-search" />
          <DynamicIcon className="compatible-icon-size" name="search" />
        </InputWrapper>
        <Flex className="mt-6 w-3/4 mx-auto" justify="center" wrap="wrap">
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>بررسی آپدیت های جدید</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>یادگیری موارد جدید</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>ارائه خدمات وب</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>مشاوره خدمات</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>تیکت پشتیبانی</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>چیت شیت های فارسی</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>محصولات استارتاپی</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>مشاوره مسیر برنامه نویسی</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>پروژه های اوپن سورس</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>ایونت های جامعه</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="sparkles" />
            <span>رزومه قابل اطمینان</span>
          </Badge>
        </Flex>
      </div>

      <Space />

      <Flex className="container">
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
            <h2 className="font-vazir-bold text-xl mt-3">رزومه فعالیتی</h2>
            <p className="text-center text-sm leading-relaxed">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">مشاهده</Button>
            </Link>
          </Flex>
        </Box>

        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
            <h2 className="font-vazir-bold text-xl mt-3">ابزار ها</h2>
            <p className="text-center text-sm leading-relaxed">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">مشاهده</Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
            <h2 className="font-vazir-bold text-xl mt-3">خدمات</h2>
            <p className="text-center text-sm leading-relaxed">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">مشاهده</Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
            <h2 className="font-vazir-bold text-xl mt-3">محصولات ما</h2>
            <p className="text-center text-sm leading-relaxed">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">مشاهده</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Space />

      <Box className="container" space="lg">
        <h3 className="text-xl font-vazir-black">راهنمایی میخواهید؟ تیکت بزنید</h3>
        <p className="mt-3">
          معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
          صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در
          آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از
          آنجایی که طراحان عموما نویسنده متن نیستند
        </p>
        <Flex className="mt-3">
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="check" />
            <span>مشاوره</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="check" />
            <span>مسیر یادگیری</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="check" />
            <span>همکاری</span>
          </Badge>
        </Flex>
        <Link href={"/"} className="mt-3">
          <Button>
            <span>تیکت بزنید</span>
            <DynamicIcon className="compatible-icon-size -scale-x-100" name="send-horizonal" />
          </Button>
        </Link>

        <Flex className="mt-3" justify="end">
          <Link href={"/"}>
            <Button shape="ghost">
              <span>متنی برای راه های ارتباط با ما</span>
              <DynamicIcon className="compatible-icon-size" name="arrow-left" />
            </Button>
          </Link>
        </Flex>
      </Box>

      <Space />

      <Flex className="container" justify="center">
        <Link href={"/"}>
          <Button>اخبار</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="outline">آموزش</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="outline">چیت شیت</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="outline">تحلیل و بررسی</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="outline">آپدیت</Button>
        </Link>
      </Flex>

      <Space size="sm" />

      <Flex className="container">
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-full aspect-square bg-foreground/10 rounded-xl" />
            <span className="font-vazir-bold text-center">
              چگونه کارخانه خود را یک سیستم آنلاین کنیم؟
            </span>
            <p className="line-clamp-3 mt-1 text-center text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز است.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">بخوانید</Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-full aspect-square bg-foreground/10 rounded-xl" />
            <span className="font-vazir-bold text-center">
              چگونه کارخانه خود را یک سیستم آنلاین کنیم؟
            </span>
            <p className="line-clamp-3 mt-1 text-center text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز است.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">بخوانید</Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-full aspect-square bg-foreground/10 rounded-xl" />
            <span className="font-vazir-bold text-center">
              چگونه کارخانه خود را یک سیستم آنلاین کنیم؟
            </span>
            <p className="line-clamp-3 mt-1 text-center text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز است.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">بخوانید</Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-1/4" space="sm">
          <Flex justify="center" direction="column">
            <div className="w-full aspect-square bg-foreground/10 rounded-xl" />
            <span className="font-vazir-bold text-center">
              چگونه کارخانه خود را یک سیستم آنلاین کنیم؟
            </span>
            <p className="line-clamp-3 mt-1 text-center text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز است.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">بخوانید</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Space size="sm" />

      <Flex className="container" justify="center">
        <Link href={"/"}>
          <Button shape="ghost">
            <span>مشاهده همه مقالات</span>
            <DynamicIcon className="compatible-icon-size" name="arrow-left" />
          </Button>
        </Link>
      </Flex>

      <Space />

      <div className="container">
        <Box>
          <Flex justify="between">
            <h4 className="font-vazir-bold">
              چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
            </h4>
            <Link href={"/"}>
              <Button shape="outline">
                <span>بررسی</span>
                <DynamicIcon className="compatible-icon-size" name="chevron-left" />
              </Button>
            </Link>
          </Flex>
        </Box>

        <Space size="sm" />

        <Box>
          <Flex justify="between">
            <h4 className="font-vazir-bold">
              چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
            </h4>
            <Link href={"/"}>
              <Button shape="outline">
                <span>بررسی</span>
                <DynamicIcon className="compatible-icon-size" name="chevron-left" />
              </Button>
            </Link>
          </Flex>
        </Box>

        <Space size="sm" />

        <Box>
          <Flex justify="between">
            <h4 className="font-vazir-bold">
              چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
            </h4>
            <Link href={"/"}>
              <Button shape="outline">
                <span>بررسی</span>
                <DynamicIcon className="compatible-icon-size" name="chevron-left" />
              </Button>
            </Link>
          </Flex>
        </Box>

        <Space size="sm" />

        <Box>
          <Flex justify="between">
            <h4 className="font-vazir-bold">
              چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
            </h4>
            <Link href={"/"}>
              <Button shape="outline">
                <span>بررسی</span>
                <DynamicIcon className="compatible-icon-size" name="chevron-left" />
              </Button>
            </Link>
          </Flex>
        </Box>

        <Space size="sm" />

        <Box>
          <Flex justify="between">
            <h4 className="font-vazir-bold">
              چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
            </h4>
            <Link href={"/"}>
              <Button shape="outline">
                <span>بررسی</span>
                <DynamicIcon className="compatible-icon-size" name="chevron-left" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </div>

      <Space size="sm" />

      <Flex className="container" justify="center">
        <Link href={"/"}>
          <Button shape="ghost">
            <span>مشاهده همه سوالات</span>
            <DynamicIcon className="compatible-icon-size" name="arrow-left" />
          </Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">
            <span>سوال خودتان را بپرسید</span>
            <DynamicIcon className="compatible-icon-size" name="pencil" />
          </Button>
        </Link>
      </Flex>

      <Space />

      <Flex className="container" wrap="wrap" justify="center" space="lg">
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <DynamicIcon className="size-7" name="users" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <DynamicIcon className="compatible-icon-size" name="plus" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <DynamicIcon className="size-7" name="users" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <DynamicIcon className="compatible-icon-size" name="plus" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <DynamicIcon className="size-7" name="users" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <DynamicIcon className="compatible-icon-size" name="plus" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <DynamicIcon className="size-7" name="users" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <DynamicIcon className="compatible-icon-size" name="plus" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <DynamicIcon className="size-7" name="users" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <DynamicIcon className="compatible-icon-size" name="plus" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
