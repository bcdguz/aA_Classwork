function $l(selector){
  const nodeList = document.querySelectorAll(selector);
  // let elementArr = Array.from(nodeList);
  let elementArr = Array.prototype.slice.call(nodeList)
  return elementArr;
}

window.$l = $l;

