import { HTMLAttributes } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

interface Image {
  image?: string;
  alt?: string;
}

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  images?: Image[];
  className?: string;
  settings?: Settings;
  imagesHeight?: string;
}

export const Carousel = ({
  images = [],
  className,
  settings,
  imagesHeight = "200px",
}: CarouselProps) => {
  const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const combinedSettings = { ...defaultSettings, ...settings };

  return (
    <div className={` ${className}`}>
      <Slider {...combinedSettings}>
        {images.map((item, i) => (
          <div key={i}>
            <img
              src={item.image}
              alt={item.alt || `carousel image ${i + 1}`}
              className={"w-full object-cover rounded-md "}
              style={{ height: imagesHeight }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
