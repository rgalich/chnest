import { Connection, Repository } from 'typeorm';
import { Step } from './step.entity';

export const stepProviders = [
  {
    provide: 'StepRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Step),
    inject: ['DbConnectionToken'],
  },
];