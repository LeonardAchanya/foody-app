const multer = require("multer");

//storage path wherte the files will be stored
 const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, "uploads/");
			},
			filename: function(req, file, cb) {
				cb(null, Date.now() + "-" + file.originalname);
				}});

//filefilter allows only specified image type to be uploaded
 function fileFilter(req, file, cb) {
	if (
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg"
		){
		cb(null, true);
		} else {
		cb(null, false);
		}
		}

 const upload = multer({ storage, fileFilter });

 module.exports = upload;