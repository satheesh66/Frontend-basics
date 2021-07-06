import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

export const useLayout = (...args) => {
  const [rect, setRect] = useState(null);
  const ref = useRef();

  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
  }, args);

  return [ref, rect];
};
