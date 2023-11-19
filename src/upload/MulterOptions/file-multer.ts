import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';

export const FileMulterOptions: MulterOptions = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/test-upload/file');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  }),
  // fileFilter: function (req, file, cp) {
  //   if (file.mimetype === '') {

  //   }
  // }
};
