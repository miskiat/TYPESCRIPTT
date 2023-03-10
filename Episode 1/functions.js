"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "${str1} ${str2}";
};
exports.addStrings = addStrings;
//Union types
var format = function (title, param) {
    return "${title} ${param}";
};
exports.format = format;
//Void function
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
//Promise function
var fetchData = function (url) {
    return Promise.resolve("Data from ${url}");
};
exports.fetchData = fetchData;
//Rest Parameters(for multiple arguments and the combine them into an array )
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return '${salutation} ${names.join(" ")}';
}
//when types are enforced  with typescript,typescript only enforces types at COMPILE time not at RUN time
function getName(user) {
    return "${user?.first} ${user.last}";
}
exports.getName = getName;
