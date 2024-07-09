import { useEffect, useState } from 'react';

export const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export const shuffle = (list) => {
  let currentIndex = list.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [list[currentIndex], list[randomIndex]] = [list[randomIndex], list[currentIndex]];
  }

  return list;
};

export const sortById = (a, b) => {
  return a.id - b.id;
};

export const sortByAsc = (a, b, param) => {
  return a[param] - b[param];
};

export const sortByDesc = (a, b, param) => {
  return b[param] - a[param];
};

export function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}