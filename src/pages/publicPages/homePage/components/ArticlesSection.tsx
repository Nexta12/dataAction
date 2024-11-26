import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import { ArticleCard } from "@components/imageCard/ImageCard";
import SubHeading from "@components/subHeading/SubHeading";

const ArticlesSection = () => {
  return (
    <PublicPageContainer gradientDirection="45deg">
      <div className="text-center">
        <Heading>Articles & Featured Dashboards</Heading>
      </div>
      <div className="text-center mb-4">
        <SubHeading>We have some interesting news for you</SubHeading>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <ArticleCard
          image="/assets/rectangle.png"
          publishDate="Jan, 30th 2021"
          author="Albert Sans"
          text="What makes an authentic employee profile, and why does it matter ?"
          link="#"
        />
        <ArticleCard
          image="/assets/rectangle.png"
          publishDate="Jan, 30th 2021"
          author="Albert Sans"
          text="What makes an authentic employee profile, and why does it matter ?"
           link="#"
        />
        <ArticleCard
          image="/slides/slide1.png"
          publishDate="Jan, 30th 2021"
          author="Albert Sans"
          text="What makes an authentic employee profile, and why does it matter ?"
           link="#"
        />
      </div>
    </PublicPageContainer>
  );
};

export default ArticlesSection;
