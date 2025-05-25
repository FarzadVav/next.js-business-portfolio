import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Badge from "root/components/ui/Badge/Index";
import Space from "root/components/ui/Space/Index";
import { $mergeKeys } from "root/utils/general.utils";
import Heading from "root/components/ui/Heading/Index";
import { ROUTES } from "root/constants/routes.constants";
import Paragraph from "root/components/ui/Paragraph/Index";
import PageHero from "root/components/modules/PageHero/Index";

const ArticlesPage = () => {
  return (
    <>
      <Space />

      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <Space />
      <Flex className="p-1 w-fit mx-auto rounded-lg bg-foreground/5">
        <button className="btn btn-fill">فرانت اند</button>
        <button className="btn btn-ghost">بک اند</button>
        <button className="btn btn-ghost">موبایل</button>
        <button className="btn btn-ghost">دسکتاپ</button>
        <button className="btn btn-ghost">کلاود</button>
      </Flex>

      <Space size="normal" />
      <div className="container grid grid-cols-2 gap-3">
        {Array.from(new Array(7)).map(() => (
          <Box key={Math.random()}>
            <div className="w-full aspect-video bg-foreground/10 rounded-lg" />

            <Space size="sm" />
            <Heading font="vazir">
              <h2>استفاده از تکنیک توسعه بر پایه دامنه</h2>
            </Heading>
            <Space size="xs" />
            <Badge className="w-fit">مهندسی نرم افزار</Badge>

            <Space size="sm" />
            <Paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </Paragraph>

            <Space size="sm" />
            <Link className="w-full" href={$mergeKeys("/", [ROUTES.articles, 1])}>
              <button className="w-full btn btn-outline">
                <span>بیشتر بخوانید</span>
                <ArrowUpLeft className="compatible-icon" />
              </button>
            </Link>
          </Box>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
