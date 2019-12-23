import React, {Ref, useEffect, useRef} from 'react';


function Test() {
  const childRef = useRef(null);

  return <div className="container">
    <Child ref={childRef}></Child>
  </div>;
}

const Child = React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
  useEffect(() => {
    console.log(2, ref); // {current: DomObject}
  }, []);
  return <div ref={ref}>
    child
  </div>;
});

export {
  Test
};
