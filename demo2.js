var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.m1 = function () {
        var str = '100';
        // var str1:number=<number><any>str;
        var str1 = str;
        //console.log(str1);
        console.log(typeof (str1));
        str1 = 1000;
        console.log(str1);
    };
    return User;
}());
var u = new User();
u.m1();
