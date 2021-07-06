import React from "react";
import { useLayout } from "./customHook";

export function Layout() {
  const [divRef, rect] = useLayout();

  return (
    <div>
      <div ref={divRef}>
        name:satheesh width is <pre>{JSON.stringify(rect, null, 2)}</pre>
      </div>
    </div>
  );
}
