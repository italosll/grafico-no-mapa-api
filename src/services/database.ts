import { createConnection, Connection } from 'typeorm';

const connection = await createConnection({ options: { encrypt: false } });
