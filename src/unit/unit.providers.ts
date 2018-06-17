import { Connection, Repository } from 'typeorm';
import { Unit } from './unit.entity';

export const unitProviders = [
  {
    provide: 'UnitRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Unit),
    inject: ['DbConnectionToken'],
  },
];