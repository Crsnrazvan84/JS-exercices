var myNameSpace = window.myNameSpace || {};

//module
myNameSpace.module = (function() {
    //private members
    var privateProperty1 = false;
    var privateProperty2 = [1, 2, 3];
    function privateMethod1() {
        console.log("Hi");
    }
    function privateMethod2() {
        console.log("Hello");
    }

    //return object
    return {
        //public members
        publiProperty1: true,
        publiProperty2: 10,
        publicMethod1: function() {
            console.log(privateProperty1);
        },
        publicMethod2: function() {
            console.log(privateProperty2);
        }
    };
})();

myNameSpace.module.publicMethod1();
myNameSpace.module.publicMethod2();