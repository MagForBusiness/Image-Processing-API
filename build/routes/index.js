"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var displyimage_1 = __importDefault(require("./api/displyimage"));
// import rout2 from './api/rout2';
var router = express_1.default.Router();
router.use('/image-disply', displyimage_1.default);
// router.use('/rout2', rout2);
router.get('/', function (req, res) {
    res.send('router Connect!');
});
exports.default = router;
