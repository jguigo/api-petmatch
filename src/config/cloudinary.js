const cloudinary = require("cloudinary");

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_KEY,
   api_secret: process.env.CLOUDINARY_SECRET,
});

exports.uploads = (file, folder) => {
   return new Promise((resolve) => {
      cloudinary.uploader.upload(
         file,
         (cloudinaryReturn) => {
            resolve({
               imageUrl: cloudinaryReturn.url,
            });
         },
         {
            folder, 
            resource_type: "auto",
         }
      );
   });
};