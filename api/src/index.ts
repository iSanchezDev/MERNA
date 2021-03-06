
import express from 'express';
import Routes from './routes/index.routes';

const port = process.env.PORT || 3001;


/*
 * Express config
 */
const app = express();
app.use('/api/v1', Routes);


/**
 * Server config
 */
app.listen(port,  () => {
  console.log(`🚀️ Server ready at http://localhost:${port}`);
});
