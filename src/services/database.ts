import { createConnection, Connection } from 'typeorm';

const connection = await createConnection({ entities: [path.join(process.cwd(), './src/entities/*.ts,.js')] });
