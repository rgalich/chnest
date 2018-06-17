import { Connection, Repository } from 'typeorm';
import { IngredientList } from './ingredientList.entity';

export const ingredientListProviders = [
  {
    provide: 'IngredientListRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(IngredientList),
    inject: ['DbConnectionToken'],
  },
];