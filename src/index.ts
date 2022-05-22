/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createConnection, getConnectionOptions } from 'typeorm';
import app from './app';

createConnection();

// getConnectionOptions().then((options) => {
//   console.log(options);
// });

// console.log(process.env.JWT_SECRET_KEY);

const host = process.env.API_HOST || '0.0.0.0';
const port = +process.env.PORT || 3333;

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
