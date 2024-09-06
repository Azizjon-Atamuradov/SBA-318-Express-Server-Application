import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/not.Found.js';

/// Get the directory name

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();


///// setup static folder
app.use(express.static (path.join(__dirname, 'public')));



/// Body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

////logger middleware
app.use(logger);



///routes
app.use('/api/posts', posts)




// Error handler
app.use(notFound);
app.use(errorHandler);



app.listen(8000, () => {
    console.log('Server is running on 8000.....');
})




