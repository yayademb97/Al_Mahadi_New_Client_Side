// utils/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    let folderName = 'uploads';
    let resourceType = file.mimetype.startsWith('image/') ? 'image' : 'raw';
    return {
      folder: folderName,
      format: file.mimetype.split("/")[1], // jpg, png, pdf
      resource_type: resourceType,
      public_id: `${Date.now()}-${file.originalname}`
    };
  }
});

export { cloudinary, storage };
