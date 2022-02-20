"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilites/logger"));
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
// set up route
var image_disply = express_1.default.Router();
//Resize prosses
function ResizImage(filename, width, height) {
    try {
        var ResizImage_1 = (0, sharp_1.default)("assets/full/".concat(filename, ".jpg"))
            .resize(width, height)
            .toFile("assets/thumb/".concat(filename, "-resize.jpg"));
        console.log("Image Resize ".concat(filename, "-resize.jpg"));
    }
    catch (error) {
        console.log('error');
    }
}
;
image_disply.get('/', logger_1.default, function (req, res) {
    //get URL Parameters
    //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
    var filename = String(req.query.filename);
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    //test User Input 
    if (isNaN(width)) {
        res.send("Enter The Parameters As http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300");
    }
    else {
        ResizImage(filename, width, height);
        //display in browser
        res.sendFile(path_1.default.resolve() + "/assets/thumb/".concat(filename, "-resize.jpg"));
    }
    ;
});
exports.default = image_disply;
