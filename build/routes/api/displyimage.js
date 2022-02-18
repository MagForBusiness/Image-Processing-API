"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilites/logger"));
var image_disply = express_1.default.Router();
image_disply.get('/', logger_1.default, function (req, res) {
    res.send('image prevew');
});
exports.default = image_disply;
