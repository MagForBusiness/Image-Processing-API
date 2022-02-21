"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var displyimageRout_1 = require("./api/displyimageRout");
// import rout2 from './api/rout2';
var router = express_1.default.Router();
router.use('/image-disply', displyimageRout_1.image_disply);
// router.use('/rout2', rout2);
router.get('/', function (req, res) {
    res.send('router Connect!');
});
exports.default = router;
