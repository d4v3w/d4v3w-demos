import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import styles from "./Carousel.module.css";
import { CarouselChild } from "./CarouselChild";
import { Direction, ScrollButton } from "./ScrollButton";

export interface CarouselProps {
  items?: CarouselChild[];
}

export const Carousel = ({ items = [] }: CarouselProps) => {
  const URL_STATE_QUERY = "carousel";
  const [query, setQuery] = useSearchParams();
  const q = query.get(URL_STATE_QUERY);
  const selected: number = q ? parseInt(q) : -1;
  const formRef = useRef<HTMLFormElement>(null);
  const MAX_ITEMS = items.length ?? 0;
  const itemRefs = useRef<HTMLElement[]>([]);

  if (MAX_ITEMS <= 0) {
    return null;
  }
  const updateQuery = (e: number) => {
    setQuery(
      (prev) => {
        prev.set(URL_STATE_QUERY, e.toString());
        return prev;
      },
      { replace: true },
    );
  };

  const handleScrollClick = (increment: boolean) => {
    let val = selected;
    if (increment && selected < MAX_ITEMS - 1) {
      val = selected + 1;
    }
    if (!increment && selected > 0) {
      val = selected - 1;
    }
    updateQuery(val);
  };

  useEffect(() => {
    const currentItem = itemRefs.current[selected];
    currentItem?.scrollIntoView({
      behavior: "smooth",
    });
  }, [selected]);

  return (
    <div className={styles.container}>
      <ScrollButton
        direction={Direction.Left}
        onClick={() => {
          handleScrollClick(false);
        }}
        disabled={selected <= 0}
      />
      <div className={styles.scroller}>
        {items.map((item: CarouselChild, key) => {
          return (
            <div
              key={key}
              ref={(el) => {
                if (el != null) {
                  itemRefs.current.push(el);
                }
              }}
            >
              <CarouselChild
                item={item}
                selected={key === selected}
                onClick={() => {
                  updateQuery(key);
                }}
              />
            </div>
          );
        })}
      </div>
      <ScrollButton
        direction={Direction.Right}
        onClick={() => {
          handleScrollClick(true);
        }}
        disabled={selected >= MAX_ITEMS - 1}
      />
      <form ref={formRef} action="">
        <input
          type="hidden"
          name={URL_STATE_QUERY}
          value={selected}
          required={true}
        />
        <Button submit={true} label="Submit" cta={true} />
      </form>
    </div>
  );
};
