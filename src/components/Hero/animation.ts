export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}

export const wordVariants = {
    enter: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.6 } },
  };

  export const textVariants = {
    hidden: { opacity: 0, y: -20 }, // Start off-screen and transparent
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Fade in and slide up
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } } // Fade out and slide down
  };