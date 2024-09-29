export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}

export const descriptionAnimation = {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, delay: 3 } },
  };

  export const imageAnimation = {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0, transition: { duration: 1 },delay:2.5 },
  };