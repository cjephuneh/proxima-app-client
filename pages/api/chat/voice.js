import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  // limits: {
  //     fileSize: 5 * 1024 * 1024 //5MB file size limit
  // }
});

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};


export default async function handler(req, res) {
  try {
    upload.single('audio')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // handle multer error e.g. file size exceeded
        return res.status(200).json({ error: err.message });
      } else if (err) {
        // handle other errors
        return res.status(200).json({ error: err.message });
      }

      // extract uploaded file data
      const fileData = req.file;

      // process the file as needed
      console.log(fileData);

      // return a response
      res.json({ success: true });
    });
  } catch (error) {
    res.json({ message: error.response.data });
  }
}
