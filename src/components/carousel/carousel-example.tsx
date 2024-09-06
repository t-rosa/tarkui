import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Carousel } from "./carousel";

export function CarouselExample() {
  const images = [
    "https://tinyurl.com/5b6ka8jd",
    "https://tinyurl.com/7rmccdn5",
    "https://tinyurl.com/59jxz9uu",
  ];
  return (
    <Carousel.Root>
      <div className="flex items-center gap-6">
        <Carousel.Control>
          <Carousel.PrevTrigger>
            <ArrowLeftIcon />
          </Carousel.PrevTrigger>
        </Carousel.Control>
        <Carousel.Viewport>
          <Carousel.ItemGroup>
            {images.map((image, index) => (
              <Carousel.Item key={index} index={index}>
                <img src={image} className="object-cover h-96 w-full" />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
        </Carousel.Viewport>
        <Carousel.Control>
          <Carousel.NextTrigger>
            <ArrowRightIcon />
          </Carousel.NextTrigger>
        </Carousel.Control>
      </div>
    </Carousel.Root>
  );
}
