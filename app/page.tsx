import Link from "next/link";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Input from "root/components/ui/Input/Index";
import Button from "root/components/ui/Button/Index";
import Paragraph from "root/components/ui/Paragraph/Index";
import Heading from "root/components/ui/Heading/Index";
import InputWrapper from "root/components/ui/Input/Wrapper";
import HeroSection from "root/components/templates/landing/HeroSection/Index";
import Consultation from "root/components/templates/landing/Consultation/Index";
import { ArrowLeft, ChevronLeft, Pencil, Plus, Search, Sparkles, Users } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Space />

      <div className="container relative">
        <HeroSection />

        <Heading size="xl">
          <h1 className="text-center">
            مکانی برای برنامه نویسی وب <br /> برای خدمات و آموزش با ما همراه باشید
          </h1>
        </Heading>
        <Space size="normal" />
        <Paragraph className="w-3/4 text-center mx-auto">
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
          طراحان رایانه ای...
        </Paragraph>
        <Space size="normal" />
        <InputWrapper className="w-1/2 mx-auto" htmlFor="global-search">
          <Input placeholder="جستجوی هرچی میخوای..." id="global-search" />
          <Search className="compatible-icon-size" />
        </InputWrapper>
        <Space size="normal" />
        <Flex className="w-3/4 mx-auto" justify="center" wrap="wrap">
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>بررسی آپدیت های جدید</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>یادگیری موارد جدید</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>ارائه خدمات وب</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>مشاوره خدمات</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>تیکت پشتیبانی</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>چیت شیت های فارسی</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>محصولات استارتاپی</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>مشاوره مسیر برنامه نویسی</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>پروژه های اوپن سورس</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
            <span>ایونت های جامعه</span>
          </Badge>
          <Badge>
            <Sparkles className="compatible-icon-size" />
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

      <Consultation />

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
            <ArrowLeft className="compatible-icon-size" />
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
                <ChevronLeft className="compatible-icon-size" />
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
                <ChevronLeft className="compatible-icon-size" />
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
                <ChevronLeft className="compatible-icon-size" />
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
                <ChevronLeft className="compatible-icon-size" />
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
                <ChevronLeft className="compatible-icon-size" />
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
            <ArrowLeft className="compatible-icon-size" />
          </Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">
            <span>سوال خودتان را بپرسید</span>
            <Pencil className="compatible-icon-size" />
          </Button>
        </Link>
      </Flex>

      <Space />

      <Flex className="container" wrap="wrap" justify="center" space="lg">
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <Users className="compatible-icon-size" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <Plus className="compatible-icon-size" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <Users className="compatible-icon-size" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <Plus className="compatible-icon-size" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <Users className="compatible-icon-size" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <Plus className="compatible-icon-size" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <Users className="compatible-icon-size" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <Plus className="compatible-icon-size" />
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box className="w-[calc(33%-1rem)]">
          <Flex justify="center" direction="column">
            <Flex>
              <Users className="compatible-icon-size" />
              <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
            </Flex>
            <p className="text-center">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل
              برای بهبود ظاهری.
            </p>
            <Link className="mt-3" href={"/"}>
              <Button shape="outline">
                <span>شرکت کنید</span>
                <Plus className="compatible-icon-size" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
