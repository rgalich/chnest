import { Connection, Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';

export const ingredientProviders = [
  {
    provide: 'IngredientRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Ingredient),
    inject: ['DbConnectionToken'],
  },
];