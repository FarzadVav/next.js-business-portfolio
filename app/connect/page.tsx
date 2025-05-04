import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeftIcon, CheckIcon, ChevronDownIcon, FileIcon } from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Input from "root/components/ui/Input/Index";
import Space from "root/components/ui/Space/Index";
import githubImg from "root/public/logos/github.svg";
import Button from "root/components/ui/Button/Index";
import youtubeImg from "root/public/logos/youtube.svg";
import Heading from "root/components/ui/Heading/Index";
import discordImg from "root/public/logos/discord.svg";
import TextArea from "root/components/ui/Input/Textarea";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import Paragraph from "root/components/ui/Paragraph/Index";
import instagramImg from "root/public/logos/instagram.svg";
import InputWrapper from "root/components/ui/Input/Wrapper";
import PageHero from "root/components/modules/PageHero/Index";

const ConnectPage = () => {
  return (
    <>
      <Space />

      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <Space />
      <div className="container grid grid-cols-3 gap-3">
        <Box>
          <Flex space="lg">
            <Image src={telegramImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={instagramImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={linkedinImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={discordImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={youtubeImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={githubImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
      </div>

      <Space />
      <Paragraph className="container text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
        فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
        شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </Paragraph>

      <Space />
      <Flex className="container">
        <InputWrapper className="w-1/2" htmlFor="connect_topic">
          <Input placeholder="موضوع تیکت" id="connect_topic" name="connect_topic" />
          <ChevronDownIcon className="compatible-icon-size" />
        </InputWrapper>
        <InputWrapper className="w-1/2" htmlFor="connect_phone" dir="ltr">
          <Input placeholder="09** *** ****" id="connect_phone" name="connect_phone" />
        </InputWrapper>
      </Flex>
      <Space size="sm" />
      <div className="container">
        <InputWrapper htmlFor="connect_text" textarea-size="normal">
          <TextArea placeholder="متن تان را شرح دهید..." id="connect_text" name="connect_text" />
        </InputWrapper>
        <Space size="sm" />
        <Button shape="outline">
          <span>فایل ضمیمه (اختیاری)</span>
          <FileIcon className="compatible-icon-size" />
        </Button>
        <Space size="sm" />
        <Button className="mx-auto">
          <span>ثبت تیکت</span>
          <CheckIcon className="compatible-icon-size" />
        </Button>
      </div>
    </>
  );
};

export default ConnectPage;
