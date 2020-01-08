import loadable from '@loadable/component';

const PageIcon = loadable(() => import('./PageIcon/PageIcon'));
const PageButton = loadable(() => import('./PageButton/PageButton'));
const PageDialog = loadable(() => import('./PageDialog/PageDialog'));
const PageLayout = loadable(() => import('./PageLayout/PageLayout'));

const pages = {
  icon: PageIcon,
  button: PageButton,
  dialog: PageDialog,
  layout: PageLayout,
};

export default pages;
