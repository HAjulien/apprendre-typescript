//Type-------------------------------------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _A_private, _a, _Carre_origin;
var a = "hello word";
var n = 12;
var b = true;
var d = null;
var arr = ["azer", "tyu", "iop"];
var arr2 = [23, true, "STRING"];
var user1 = { firstName: "John", lastName: "Doe", sister: "Jane" };
var user2 = { firstName: "Johnny", lastName: "Dawson" };
var date = new Date();
var callBack = function (e) {
    return 3;
};
//const compteur = document.querySelector('#compteur') as HTMLButtonElement  //force le type : insertion de type
// const compteur = <HTMLButtonElement> document.querySelector('#compteur')
//-Narrowing--------------------------------------------------------------------------------------------------------
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function exemple(a) {
    if (Array.isArray(a)) {
        a[0];
    }
    if (a instanceof Date) {
        console.log(a);
    }
}
function isDate(a) {
    return a instanceof Date;
}
function DetectionAutoType(a) {
    if ("value" in a) {
        a;
    }
    if (isDate(a)) {
        a;
    }
}
var user3 = { firstname: "Jason", lastname: "Momoa" };
var date2 = '25 octobre 2022';
function identity(arg) {
    return arg;
}
var aa = identity(3);
var bb = identity("test");
function first(arg) {
    return arg[0];
}
var cc = first(["abc", "def", 3]);
var dd = ["abc", "def", 3];
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
var ee = consoleSize(["4", 3]);
//--------------------------------------------------------------------------------------------------------------
var compteur = document.querySelector('#compteur');
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerHTML = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
//-Classes---------------------------------------------------------------------------------------------
function reverse(arr) {
    return __spreadArray([], arr, true).reverse();
}
var A = /** @class */ (function () {
    function A() {
        _A_private.set(this, 3);
        this.protected = 3;
        this.public = 5;
    }
    A.prototype.log = function () {
        console.log(__classPrivateFieldGet(this, _A_private, "f"));
    };
    return A;
}());
_A_private = new WeakMap();
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.log = function () {
        console.log(this.protected);
    };
    return B;
}(A));
var aInstance = new A();
console.log(aInstance.public);
var D = /** @class */ (function () {
    function D(a) {
        this.a = a;
    }
    return D;
}());
var dInstance = new D(3);
console.log(dInstance.a);
var Collection = /** @class */ (function () {
    function Collection(items) {
        this.items = items;
    }
    Collection.prototype.add = function (item) {
        this.items.push(item);
        return this;
    };
    Collection.prototype.first = function () {
        return this.items[0] || null;
    };
    return Collection;
}());
var collection = new Collection([1, 2, 3]);
var ff = collection.add(6);
var bCollection = collection.first();
var Geometry = /** @class */ (function () {
    function Geometry() {
        this.x = 0;
        this.y = 0;
    }
    return Geometry;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 2;
        _this.y = 2;
        return _this;
    }
    Triangle.prototype.surface = function () {
        return 3;
    };
    return Triangle;
}(Geometry));
var Carre = /** @class */ (function () {
    function Carre() {
    }
    return Carre;
}());
_a = Carre;
_Carre_origin = { value: void 0 };
(function () {
    __classPrivateFieldSet(Carre, _a, { x: 0, y: 0 }, "f", _Carre_origin);
})();
window.googleAnalytics;
var TwoDimensionPoint = /** @class */ (function () {
    function TwoDimensionPoint() {
        this.x = 2;
        this.y = 2;
    }
    return TwoDimensionPoint;
}());
function draw(p) {
}
draw(new TwoDimensionPoint());
//tuple
var aaa = [1, 2, 3];
var bbb = ['tomate', 4];
var ccc = [55, 'azert'];
var abc = ["tomate", 22];
var bcs = ["banane", 3];
function merge(a, b) {
    return __spreadArray(__spreadArray([], a, true), b, true);
}
var aab = merge(abc, bcs);
var aac = merge(abc, [1, 2, 4]);
