import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Carousel } from "./carousel";

export function CarouselExample() {
  const images = [
    "https://tinyurl.com/5b6ka8jd",
    "https://tinyurl.com/7rmccdn5",
    "https://tinyurl.com/59jxz9uu",
  ];
  return (
    <Carousel.Root className="grid size-96">
      <Carousel.Control className="col-span-full row-span-full z-10 self-end justify-self-center p-2 flex items-center bg-background m-3 gap-5 rounded-full">
        <Carousel.PrevTrigger>
          <ArrowLeftIcon className="size-5" />
        </Carousel.PrevTrigger>
        <Carousel.IndicatorGroup className="flex gap-2">
          {images.map((_, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="border py-1 px-3 rounded-full hover:bg-muted"
            >
              {index + 1}
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger>
          <ArrowRightIcon className="size-5" />
        </Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.Viewport className="col-span-full row-span-full rounded-md overflow-hidden max-h-dvh">
        <Carousel.ItemGroup>
          {images.map((image, index) => (
            <Carousel.Item key={index} index={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover size-full"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Viewport>
    </Carousel.Root>
  );
}
