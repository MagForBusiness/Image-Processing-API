"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) {
    var active_url = req.baseUrl;
    console.log("".concat(active_url, " Was visited  ")); /***can use time now */
    next();
};
exports.default = logger;
