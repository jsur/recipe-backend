import express from 'express';
import recipe from './recipe';
const router = express.Router();

router.use('/recipe', recipe);

export default router;
