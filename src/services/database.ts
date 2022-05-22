import { createConnection, Connection } from 'typeorm';

const connection = await createConnection({ entities: './src/entities/*.ts' });
