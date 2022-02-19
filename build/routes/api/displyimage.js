"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilites/logger"));
var sharp_1 = __importDefault(require("sharp"));
// set up route 
var image_disply = express_1.default.Router();
image_disply.get('/', logger_1.default, function (req, res) {
    //get URL Parameters 
    //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
    var filename = req.query.filename;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    (0, sharp_1.default)("assets/full/".concat(filename, ".jpg")).resize(width, height).toFile("assets/thumb/".concat(filename, "-resize.jpg"));
    //disply image in browser
    var myloc = new Image();
    myloc.useMap = "image.jpg";
    var img = document.createElement('img');
    img.setAttribute('src', myloc.useMap);
    img.setAttribute('style', "height:149px;width:280px;");
    document.body.appendChild(img);
    res.send({
        'filename': filename,
        'width': width,
        'height': height
    });
});
// convert image and display it in browser (from folder full) and make anew size image ( in folder thumb)
// const convertimage =async ()=> {
//   try {
//     sharp(`assets/full/${filename}.jpg`)
//       .resize(300, 300)
//   } catch (error) {
//     console.log(error);
//   }
// }
// convertimage();
//display coverted image 
exports.default = image_disply;
