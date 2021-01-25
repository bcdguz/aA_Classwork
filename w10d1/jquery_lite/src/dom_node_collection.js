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
}

module.exports = DOMNodeCollection;