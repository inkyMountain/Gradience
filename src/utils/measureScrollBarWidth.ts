const measureScrollBarWidth = () => {
  const div = document.createElement('div');
  div.style.overflow = 'scroll';
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.position = 'absolute';
  div.style.right = '-10000px';
  document.body.appendChild(div);
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollBarWidth;
};

export default measureScrollBarWidth;
