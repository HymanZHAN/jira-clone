import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  console.log(`result:`, result);
  return result;
};

const debounce = (fn, delay) => {
  let timeout;
  return () => {
    if (timeout) {
      console.log("timeout:", timeout);
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      fn();
    }, delay);
  };
};

export const useDebounce = (value, delay) => {
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
