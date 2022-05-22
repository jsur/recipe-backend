import express from 'express';
import Ingredient from '../models/ingredient';
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, category, measure, selectedUnit, units, additionalInfo } = req.body;
    const ingredient = await Ingredient.create({
      name,
      category,
      measure,
      selectedUnit,
      units,
      additionalInfo,
    });
    res.status(200).json(ingredient);
  } catch (e) {
    next(e);
  }
});

router.get('/all', async (req, res, next) => {
  try {
    const allIngredients = await Ingredient.find({});
    res.status(200).json(allIngredients);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    res.status(200).json(ingredient);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Ingredient.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deleted);
  } catch (e) {
    next(e);
  }
});

export default router;
