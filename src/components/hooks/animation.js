export const fade = {
    hidden: { 
      opacity: 0,
      y: "50px", 
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, 
        ease: "easeOut",
        // when: "beforeChildren",
        staggerChildren: 0.24,
      } },
  }

  export const fadeFast = {
    hidden: { 
      opacity: 0,
      y: "50px", 
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.12,
      } },
  }

  export const fadeItem = {
    hidden: { 
      opacity: 0,
      y: "40px", 
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    }
  }

  export const opacityItem = {
    hidden: { 
      opacity: 0, 
    },
    show: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    }
  }
// Cookies bar animation
  export const cookiesBarAnim = {
    hidden: { 
      opacity: 0,
      y: "100%", 
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5, 
        ease: "easeOut",
      } },
  }