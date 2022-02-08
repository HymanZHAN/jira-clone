import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// const debounce = (fn, delay) => {
//   let timeout;
//   return () => {
//     if (timeout) {
//       console.log("timeout:", timeout);
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       fn();
//     }, delay);
//   };
// };

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    console.log("useEffect in useDebounce");
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearTimeout");
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};
