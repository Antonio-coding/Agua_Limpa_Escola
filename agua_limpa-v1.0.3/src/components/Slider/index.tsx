import React from "react";
import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    className: string;
    items: React.ReactElement[];
    centerMode: boolean;
    magnifiedIndex?: number;
    activeSlideCSS?: string;
  }>;

// ... (importações)

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  (
    {
      className,
      items,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref,
  ) => {
    const isSmall = (index: number) => {
      if (props?.activeIndex !== undefined && magnifiedIndex !== undefined && items?.length !== undefined) {
        if (props.activeIndex + magnifiedIndex >= items.length) {
          return index !== props.activeIndex + magnifiedIndex - items.length;
        } else {
          return index !== props.activeIndex + magnifiedIndex;
        }
      }
      return false;
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <div className={className}>
        <AliceCarousel
          items={slideItems}
          disableDotsControls
          touchTracking
          {...props}
          disableButtonsControls
          infinite
          mouseTracking
          ref={ref}
        />
      </div>
    );
  },
);

export { Slider };

