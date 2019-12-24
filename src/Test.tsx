import React, {Ref, useEffect, useRef, useState} from 'react';


function Test() {
  const childRef = useRef(null);
  useEffect(() => {
  });
  return <div className="container">
    <Child ref={childRef}/>
  </div>;
}

const Child = React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
  const [list] = useList();
  return <div ref={ref}>
    {list}
  </div>;
});

const useList = () => {
  const [list, setList] = useState([] as number[]);
  setTimeout(() => {
    setList([1, 2, 3]);
  }, 1000);
  return [list, setList];
};

export {
  Test
};
