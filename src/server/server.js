import Express from 'express';
import config from 'config';
import path from 'path';
import logger from 'morgan';
// Middleware Requirements
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
// Database Requirements
import mongoose from 'mongoose';
// Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import packconfig from '../../webpack.config.dev';
// Route Requirements
import api from './routes/api';
import auth from './routes/auth';

const app = new Express();
const port = config.get('port');
const compiler = webpack(packconfig);

console.log(`Running in process: ${process.env.NODE_ENV}`);

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: packconfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
  app.use(logger('dev'));
}

const dbURI = config.get('Database.URI');

mongoose.connect(dbURI, (err) => {
  if (err) {
    console.error('Could not connect to database.');
  } else {
    console.log(`Mongoose database connected at ${dbURI}`);
  }
});

// Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '../client/_static', 'favicon.ico')));

// Mount express routes
app.use('/api', api);
app.use('/auth', auth);


// If no route is matched before this any route will be served to the react router to handle.
if (process.env.NODE_ENV !== 'production') {
  app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
} else {
  // Set static dir
  app.use('/build', Express.static(path.join(__dirname, '../../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
  });
}

// Start HTTP server
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${port}`);
  }
});

export default app;
