import { useState } from 'react';
import { useMotionValue } from 'framer-motion';

const animationConfig = {
  cardOffset: 120,
  swipeThreshold: { offset: 60, velocity: 500 },
  dragConstraints: { top: -100, bottom: 100, left: -100, right: 100 },
  dragElastic: 0.2,
};

const useExampleCardMotion = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [dragStartDirection, setDragStartDirection] = useState(null);
  const y = useMotionValue(0);
  const x = useMotionValue(0);

  const cardVariants = {
    visible: ({ x, y, scale, opacity }) => ({
      y,
      x,
      scale,
      opacity,
      transition: {
        y: { type: 'spring', stiffness: 300, damping: 30 },
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const handleDragStart = (_event, info) => {
    setDragStartDirection(
      Math.abs(info.offset.x) > Math.abs(info.offset.y) ? 'horizontal' : 'vertical',
    );
  };

  const handleDrag = () => (dragStartDirection === 'horizontal' ? y.set(0) : x.set(0));

  const handleDragEnd = (_event, info) => {
    if (dragStartDirection === 'horizontal') {
      Math.abs(info.offset.x) > animationConfig.swipeThreshold.offset &&
        console.log(info.offset.x > 0 ? '오른쪽으로 스와이프' : '왼쪽으로 스와이프');
    }

    if (dragStartDirection === 'vertical') {
      const shouldSwitch =
        Math.abs(info.offset.y) > animationConfig.swipeThreshold.offset ||
        Math.abs(info.velocity.y) > animationConfig.swipeThreshold.velocity;

      if (shouldSwitch) {
        if (info.offset.y < 0) {
          focusedIndex < cards.length - 1 && setFocusedIndex((prev) => prev + 1);
          focusedIndex === cards.length - 2 && setCards((prev) => [...prev, Math.max(...prev) + 1]);
        } else {
          focusedIndex > 0 && setFocusedIndex((prev) => prev - 1);
        }
      }
    }

    [x, y].forEach((v) => v.set(0));
    setDragStartDirection(null);
  };

  const getCardMotionProps = (index, isFocused) => {
    const offset = (index - focusedIndex) * animationConfig.cardOffset;

    return {
      style: {
        y: isFocused ? y : offset,
        x: isFocused ? x : 0,
        zIndex: cards.length - Math.abs(focusedIndex - index),
      },
      initial: { y: offset, opacity: 0, scale: 0.8 },
      variants: cardVariants,
      custom: {
        y: isFocused ? 0 : offset,
        x: 0,
        scale: isFocused ? 1 : 0.9,
        opacity: isFocused ? 1 : 0.8,
      },
      animate: 'visible',
      exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
      drag: isFocused,
      dragDirectionLock: true,
      dragConstraints: animationConfig.dragConstraints,
      dragElastic: animationConfig.dragElastic,
      dragSnapToOrigin: true,
      onDragStart: handleDragStart,
      onDrag: handleDrag,
      onDragEnd: handleDragEnd,
      whileDrag: { scale: 1.02 },
    };
  };

  const shouldRenderCard = (index) => Math.abs(index - focusedIndex) <= 1;

  return {
    cards,
    focusedIndex,
    getCardMotionProps,
    shouldRenderCard,
  };
};

export default useExampleCardMotion;
