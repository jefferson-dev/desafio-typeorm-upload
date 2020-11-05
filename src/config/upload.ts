import multer from 'multer';
import { resolve } from 'path';
import crypto from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, cb) {
      const filename = `${crypto.randomBytes(10).toString('hex')}-${
        file.originalname
      }`;

      return cb(null, filename);
    },
  }),
};
