const Util = {
    inherits(childClass, parentClass) {
        let Surrogate = function () {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype
    }
};

module.exports = Util;