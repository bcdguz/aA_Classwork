const DOMNodeCollection = require("./dom_node_collection")

function $l(selector){
    if(selector instanceof HTMLElement) {
        const DOMElement = new DOMNodeCollection([selector]);
        return DOMElement;
    } else {
        const nodeList = document.querySelectorAll(selector);
        // let elementArr = Array.from(nodeList);
        let elementArr = Array.from(nodeList)
        return new DOMNodeCollection(elementArr);
    }
}

window.$l = $l;

