import React, {useEffect, useState} from 'react';

interface RouteGuardProps extends React.PropsWithChildren<any> {
  children: any
}

const MOCK_DURATION = 0;
const interceptors = [
  () => {
    return new Promise(resolve => {
      setTimeout(() => {
        // console.log('task1 run');
        resolve('task1 done');
      }, MOCK_DURATION);
    });
  },

  () => {
    return new Promise((resolve => {
      setTimeout(() => {
        // console.log('task2 run');
        resolve('task2 done');
      }, MOCK_DURATION);
    }));
  },
];

const runInterceptors = async () => {
  for (const interceptor of interceptors) await interceptor();
};

const GuardedRoute: React.FC<RouteGuardProps> = (props) => {
  const [taskDone, setTaskDone] = useState(false);
  useEffect(() => {
    runInterceptors().then(() => setTaskDone(true));
  }, []);
  return taskDone ? props.children : null;
};

export default GuardedRoute;
