import Loadable from 'react-loadable';
import {LoadingComponentProps} from 'react-loadable';
import React from 'react';

const Loading = ({pastDelay}: LoadingComponentProps) => {
  const loading = <div className="loading">Loading...</div>;
  const empty = <div/>;
  return pastDelay ? loading : empty;
};

const PageIcon = Loadable({
  loader: () => import('./PageIcon/PageIcon'),
  loading: Loading
});

export {
  PageIcon
};
