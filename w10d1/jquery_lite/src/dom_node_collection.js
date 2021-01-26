class DOMNodeCollection {
    constructor(arr) {
        // debugger
        this.$arr = arr;
    }

    html(inner = null){
        if (inner !== null) {
            this.$arr.forEach((node) => {
                node.innerHTML = inner;
            })
        } else {
            return this.$arr[0].innerHTML;
        }
    }

    empty(){
        this.html("");
    }

    append(arg){
        this.$arr.forEach((node) => {
            node.append(arg);
        })
    }

    addClass(str){
        this.$arr.forEach((node) => {
            node.classList.add(str);
        })
    }

    removeClass(str) {
        this.$arr.forEach((node) => {
            node.classList.remove(str);
        })
    }

    attr() {
        if (arguments.length === 2) {
            const ele = this.$arr.map((node) => {
                return node.setAttribute(arguments[0],arguments[1]);
            })
            return ele;
        } else if (arguments.length === 1) {
            const ele = this.$arr.map((node) => {
                // console.log(arguments);
                // debugger
                return node.attr(arguments[0]);
            })
            return ele[0];
        }
    }

    children(){
        let kids = [];
        this.$arr.forEach((node)=>{
            // debugger
            kids.push(...node.children)
        })
        return new DOMNodeCollection(kids)
    }

    parent(){
        let parent = [];
        this.$arr.forEach((node)=>{
            // debugger
            parent.push(node.parentNode)
        })
        return new DOMNodeCollection(parent)
    }

    find(selector){
        let ele = [];
        this.$arr.forEach((node)=>{
            const nodeList = node.querySelectorAll(selector);
            let elementArr = Array.from(nodeList);
            ele.push(...elementArr);
        })
        if (!ele.length) return null;
        return new DOMNodeCollection(ele);
    }

    
}

module.exports = DOMNodeCollection;