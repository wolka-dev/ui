// Scroll animation utility using Intersection Observer

export const observeElements = (selector, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return observer;
};

export const observeStaggerElements = (selector, staggerDelay = 100) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in");
          }, index * staggerDelay);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return observer;
};

