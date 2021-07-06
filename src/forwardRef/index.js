import React, { useRef, forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  return <input type="text" name="" id="" ref={ref} />;
});

export function ForwardRefExample() {
  const inputRef = useRef(null);

  const handleOnclick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleOnclick}>Change focus</button>
    </div>
  );
}
