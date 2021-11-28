import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  instructions: String,
  ingredients: [],
  public: false,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
