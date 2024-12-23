import Heading from "@components/heading/Heading";
import { ArticleCard } from "@components/imageCard/ImageCard";
import SubHeading from "@components/subHeading/SubHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articalesData = [
  {
    id: 1,
    image: "/assets/rectangle.png",
    publishDate: "Jan, 30th 2021",
    author: "Albert Sans",
    text: "What makes an authentic employee profile, and why does it matter ?",
    link: "#",
  },
  {
    id: 2,
    image: "/slides/slide1.png",
    publishDate: "Jan, 30th 2021",
    author: "Albert Sans",
    text: "What makes an authentic employee profile, and why does it matter ?",
    link: "#",
  },
  {
    id: 3,
    image: "/slides/slide2.png",
    publishDate: "Jan, 30th 2021",
    author: "Albert Sans",
    text: "What makes an authentic employee profile, and why does it matter ?",
    link: "#",
  },
  {
    id: 4,
    image: "/assets/computer.png",
    publishDate: "Jan, 30th 2021",
    author: "Albert Sans",
    text: "What makes an authentic employee profile, and why does it matter ?",
    link: "#",
  },
];

const ArticlesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" ">
      <div className="text-center">
        <Heading className="capitalize">Data projects you an request for</Heading>
      </div>
      <div className="text-center mb-4">
        <SubHeading>We have some interesting projects for you</SubHeading>
      </div>

      <div className="px-3 lg:px-0">
        <Slider {...settings}>
          {articalesData.map((item) => (
            <ArticleCard
              key={item.id}
              image={item.image}
              imageClass="h-[200px]"
              publishDate={item.publishDate}
              author={item.author}
              text={item.text}
              link={item.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ArticlesSection;
