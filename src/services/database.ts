import { createConnection, Connection } from 'typeorm';
import { Answer } from '../entities/Answer';
import { Profile } from '../entities/Profile';

const connection = await createConnection({ entities: [Answer, Profile] });
