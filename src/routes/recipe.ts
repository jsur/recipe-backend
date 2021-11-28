import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  // TODO: recipe add
  res.status(200).json();
});

export default router;
