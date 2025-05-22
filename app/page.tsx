import Link from "next/link";
import { ArrowUpLeftIcon, Search, Sparkles, SparklesIcon } from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Input from "root/components/ui/Input/Index";
import Button from "root/components/ui/Button/Index";
import Heading from "root/components/ui/Heading/Index";
import { ROUTES } from "root/constants/routes.constants";
import Paragraph from "root/components/ui/Paragraph/Index";
import Accordion from "root/components/ui/Accordion/Index";
import InputWrapper from "root/components/ui/Input/Wrapper";
import AccordionHeader from "root/components/ui/Accordion/Header";
import AccordionContent from "root/components/ui/Accordion/Content";
import HeroSection from "root/components/templates/landing/HeroSection/Index";

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
      <div className="bg-foreground/10 rounded-4xl py-6">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon-size" />
          <Heading className="text-center" size="lg">
            <h2>خدمات تیم ما به شما</h2>
          </Heading>
          <SparklesIcon className="compatible-icon-size -scale-x-100" />
        </Flex>

        <Space size="normal" />
        <Flex className="container">
          <Box className="w-1/3">
            <Heading>فرانت اند</Heading>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link href={ROUTES.services}>
              <Button shape="outline">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon-size" />
              </Button>
            </Link>
          </Box>
          <Box className="w-1/3">
            <Heading>بک اند</Heading>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link href={ROUTES.services}>
              <Button shape="outline">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon-size" />
              </Button>
            </Link>
          </Box>
          <Box className="w-1/3">
            <Heading>ربات تلگرام</Heading>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link href={ROUTES.services}>
              <Button shape="outline">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon-size" />
              </Button>
            </Link>
          </Box>
        </Flex>
      </div>

      <Space />
      <div className="grid grid-cols-2 container gap-3">
        <Box>
          <Flex justify="end">
            <Paragraph>بهترین روش های برنامه ریزی!</Paragraph>
            <div className="size-16 bg-foreground/10 rounded-lg" />
          </Flex>
        </Box>
        <Box>
          <Flex>
            <div className="size-16 bg-foreground/10 rounded-lg" />
            <Paragraph>بهترین روش های برنامه ریزی!</Paragraph>
          </Flex>
        </Box>
        <Box>
          <Flex justify="end">
            <Paragraph>بهترین روش های برنامه ریزی!</Paragraph>
            <div className="size-16 bg-foreground/10 rounded-lg" />
          </Flex>
        </Box>
        <Box>
          <Flex>
            <div className="size-16 bg-foreground/10 rounded-lg" />
            <Paragraph>بهترین روش های برنامه ریزی!</Paragraph>
          </Flex>
        </Box>
      </div>
      <div className="container">
        {Array.from(new Array(3)).map(() => (
          <Accordion key={Math.random()}>
            <AccordionHeader>
              <Heading font="vazir" size="sm">
                <h4>چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟</h4>
              </Heading>
            </AccordionHeader>
            <AccordionContent>
              <Space size="normal" />
              <Paragraph>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد.
              </Paragraph>
            </AccordionContent>
          </Accordion>
        ))}

        <Space size="normal" />
        <Flex className="container" justify="center">
          <Link href={ROUTES.about + "#FAQs"}>
            <Button>
              <span>درباره ما</span>
              <ArrowUpLeftIcon className="compatible-icon-size" />
            </Button>
          </Link>
          <Link href={ROUTES.about + "#FAQs"}>
            <Button shape="ghost">
              <span>همه سوالات</span>
              <ArrowUpLeftIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>
      </div>
    </>
  );
};

export default HomePage;
