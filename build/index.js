"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
//Create  application object with express()
var app = (0, express_1.default)();
//Set a port
var port = 3000;
//Add an API endpoint to get a route, then send a response to the browser
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
// // console.log('wellcome');
// const myFunc = (num: number): number => {
//     return num * num;
//   };
//   export default myFunc;
exports.default = app;
