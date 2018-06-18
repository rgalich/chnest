import { Connection, Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

export const recipeProviders = [
  {
    provide: 'RecipeRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Recipe),
    inject: ['DbConnectionToken'],
  },
];