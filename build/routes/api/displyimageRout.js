"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.image_disply = void 0;
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilites/logger"));
var path_1 = __importDefault(require("path"));
var ResizeProcess_1 = require("./ResizeProcess");
var fs = require("fs");
// set up route
exports.image_disply = express_1.default.Router();
exports.image_disply.get('/', logger_1.default, function (req, res) {
    //get URL Parameters
    //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
    var filename = String(req.query.filename);
    var vWidth = Number(req.query.width);
    var vheight = Number(req.query.height);
    //Simple Check  User Input
    if (isNaN(vWidth) ||
        isNaN(vheight) ||
        (filename == null && filename == undefined)) {
        res.send('Enter The Parameters As image-disply?filename=icelandwaterfall&width=200&height=300 **Please Make Sure to Enter Width And height in Number Format And filename not null ');
    }
    else {
        //test if image already exists-Cash Check
        var imagePath = path_1.default.resolve() + "/assets/thumb/".concat(filename, "-resize.jpg");
        try {
            if (fs.existsSync(imagePath)) {
                //get image metadata (width and height)
                res.sendFile(path_1.default.resolve() + "/assets/thumb/".concat(filename, "-resize.jpg"));
                var metadata = (0, ResizeProcess_1.GetMetadata)(imagePath);
                console.log(metadata);
                // if (metadata.width === vWidth || metadata.height === vheight) {
                //   //image exists with the same aspects
                //   //display in browser
                //   console.log('image already exists');
                //   res.sendFile(
                //     path.resolve() + `/assets/thumb/${filename}-resize.jpg`
                //   );
                // }
            }
            else {
                //call resize function.
                (0, ResizeProcess_1.ResizImage)(filename, vWidth, vheight);
                console.log('image Successfully Resize');
                res.sendFile(path_1.default.resolve() + "/assets/thumb/".concat(filename, "-resize.jpg"));
            }
        }
        catch (err) {
            console.error(err);
        }
    }
});
