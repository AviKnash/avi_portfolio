export const listVariants = {
    initial: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
      overflow: "hidden"
    },
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren" }
    }
  };
  
  
  export const opacity = {
    initial: {
      opacity: 0,
      y: -10 
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      y: -10, 
      transition: { duration: 0.3 }
    }
  };
  