import express from 'express';
import recipe from './recipe';
import ingredient from './ingredient';
const router = express.Router();

router.use('/recipe', recipe);
router.use('/ingredient', ingredient);

export default router;
