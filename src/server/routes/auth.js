/**
 * Created by jt on 11/23/16.
 */

import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import account from '../models/account';

const secret = config.get('secret');

const router = new Router();

const check = (req, res) => {
  jwt.verify(req.headers.authorization || req.params.token || req.body.token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send();
    }
    return account.findOne({ username: decoded._username }, (error, user) => { // eslint-disable-line no-underscore-dangle
      if (error || !user) {
        return res.status(500).send('failure');
      }
      console.log(`user: ${user}`);
      return res.status(200).json({ username: user.username, userID: user._id }); // eslint-disable-line no-underscore-dangle
    });
  });
};

router.post('/check', check);

router.get('/test', (req, res) => {
  res.end('hi');
});

router.get('/tester', (req, res) => {
  res.json({ test: 'test', what: 'what' });
});

router.post('/register', (req, res) => {
  console.log('Req.body: ', req.body);
  account.create({ username: req.body.username, email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) {
      res.sendStatus(400).send();
    }
    res.sendStatus(201).send(user.username);
  });
});

router.post('/login', (req, res) => {
  console.log('Trying login: ', req.body);
  return account.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(400).send();
    }
    console.log('Logging in with user: ', user);
    if (!req.body.password) {
      console.log('no password');
      return res.status(400).send();
    }
    return user.comparePassword(req.body.password, (error, result) => {
      if (error) {
        return res.status(400).send();
      }
      if (!result) {
        return res.status(401).send();
      }
      const token = jwt.sign({ _username: user.username, userID: user._id }, secret, { // eslint-disable-line no-underscore-dangle
        expiresIn: 1440, // expires in 24 hours
      });
      return res.json({
        success: true,
        message: 'Logged in',
        userID: user._id, // eslint-disable-line no-underscore-dangle
        token,
      });
    });
  });
});

router.post('/logout', (req, res) => {
  console.log('Logout Server Side');
  res.json({ message: 'Logged out' });
});

export default router;
