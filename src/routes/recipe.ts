import express from 'express';
import Recipe from '../models/recipe';
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, image, instructions, ingredients } = req.body;
    const recipe = await Recipe.create({
      name,
      image,
      instructions,
      ingredients,
    });
    res.status(200).json(recipe);
  } catch (e) {
    next(e);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const deleted = await Recipe.findOneAndDelete({ _id: req.body.id });
    res.status(200).json(deleted);
  } catch (e) {
    next(e);
  }
});

export default router;
