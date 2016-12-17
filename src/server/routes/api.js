import { Router } from 'express';
import authcheck from '../middleware';
import league from '../models/league';

const router = Router();

const todos = [
  'Work out',
  'Make a pie',
  'Walk the dog',
  'Take out garbage',
];

router.use(authcheck);

router.get('/randomtodo', (req, res) => {
  const todo = todos[Math.floor(Math.random() * todos.length)];
  res.json(todo);
});

router.get('/test', (req, res) => {
  res.end('hi');
});

router.get('/tester', (req, res) => {
  res.json({ test: 'test', what: 'what' });
});

router.get('/league', (req, res) => {
  league.find({}, (err, leagueList) => {
    if (err) {
      return err;
    }
    return res.json(leagueList);
  });
});

export default router;
