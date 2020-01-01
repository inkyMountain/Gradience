import loadable from '@loadable/component';

const PageIcon = loadable(() => import('./PageIcon/PageIcon'));
const PageButton = loadable(() => import('./PageButton/PageButton'));
const PageDialog = loadable(() => import('./PageDialog/PageDialog'));

export default {
  icon: PageIcon,
  button: PageButton,
  dialog: PageDialog
};

