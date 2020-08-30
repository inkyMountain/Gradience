import loadable from '@loadable/component';

const PageIcon = loadable(() => import(/* webpackChunkName: "PageIcon" */'./PageIcon/PageIcon'));
const PageButton = loadable(() => import(/* webpackChunkName: "PageButton" */'./PageButton/PageButton'));
const PageDialog = loadable(() => import(/* webpackChunkName: "PageDialog" */'./PageDialog/PageDialog'));
const PageLayout = loadable(() => import(/* webpackChunkName: "PageLayout" */'./PageLayout/PageLayout'));
const PageForm = loadable(() => import(/* webpackChunkName: "PageForm" */'./PageForm/PageForm'));
const PageScrollBar = loadable(() => import(/* webpackChunkName: "PageScrollBar" */'./PageScrollBar/PageScrollBar'));

const pages = {
  icon: PageIcon,
  button: PageButton,
  dialog: PageDialog,
  layout: PageLayout,
  form: PageForm,
  scrollBar: PageScrollBar
};

export default pages;
