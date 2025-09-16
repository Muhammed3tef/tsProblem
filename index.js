"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnWhatIPassIn = void 0;
function move(direction, distance) {
}
move("up", 10);
move("left", 5);
move(
// @ts-expect-error - "up-right" is not a valid direction
"up-right", 10);
move(
// @ts-expect-error - "down-left" is not a valid direction
"down-left", 20);
move("down", 
// @ts-expect-error - "20" is not a valid direction
"20");
function calculateArea(shape) {
    var _a, _b, _c, _d;
    if (shape.kind === "circle") {
        return Math.PI * ((_a = shape.radius) !== null && _a !== void 0 ? _a : 0) * ((_b = shape.radius) !== null && _b !== void 0 ? _b : 0);
    }
    else {
        return ((_c = shape.sideLength) !== null && _c !== void 0 ? _c : 0) * ((_d = shape.sideLength) !== null && _d !== void 0 ? _d : 0);
    }
}
var square = calculateArea({
    kind: 'square',
    sideLength: 5
});
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api/example.com/data")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        return [2 /*return*/, [
                                false,
                                "an error occurred"
                            ]];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, [true, data]];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, [false, "An errro occurred"]];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function exampleFunc() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, succeeded, value;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    _a = _b.sent(), succeeded = _a[0], value = _a[1];
                    if (succeeded) {
                        console.log(value);
                    }
                    else {
                        console.error(value);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var updateProduct = function (id, productInfo) {
};
// make this function accept any of IProduct interface except the id
updateProduct(1, {
    id: 2,
    name: 'newProduct',
    price: 10,
    description: 'newProductDescripton',
});
updateProduct(1, {
    id: 3,
    name: 'sceondProduct',
    price: 5,
    description: 'secondProductDescription'
});
//////////////////////////////////
var returnWhatIPassIn = function (genericString) { return genericString; };
exports.returnWhatIPassIn = returnWhatIPassIn;
var a = (0, exports.returnWhatIPassIn)("a");
// @ts-expect-error
(0, exports.returnWhatIPassIn)(1);
// @ts-expect-error
(0, exports.returnWhatIPassIn)(true);
// @ts-expect-error
(0, exports.returnWhatIPassIn)({
    foo: "bar",
});
//////////////////////////////////////////
var returnBothOfWhatIPassIn = function (a, b) {
    return {
        a: a,
        b: b,
    };
};
var result = returnBothOfWhatIPassIn("a", 1);
////////////////////////////////////////////
var array = [
    {
        name: "John",
    },
    {
        name: "Steve",
    },
];
var obj2 = array.reduce(function (accum, item) {
    accum[item.name] = item;
    return accum;
}, {});
//////////////////////////////////
function getValue(obj, key) {
    return obj[key];
}
var obj = {
    a: 1,
    b: 'some-string',
    c: true
};
var numberResult = getValue(obj, 'a');
var stringResult = getValue(obj, 'b');
var booleanResult = getValue(obj, 'c');
