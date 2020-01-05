import loadable from '@loadable/component';

const PageIcon = loadable(() => import('./PageIcon/PageIcon'));
const PageButton = loadable(() => import('./PageButton/PageButton'));
const PageDialog = loadable(() => import('./PageDialog/PageDialog'));

const pages = {
  icon: PageIcon,
  button: PageButton,
  dialog: PageDialog
};

export default pages;
