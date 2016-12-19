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

// League CRUD routes
router.get('/league', (req, res) => {
  league.find({}, (err, leagueList) => {
    if (err) {
      return err;
    }
    return res.json(leagueList);
  });
});

router.get('/league/:id', (req, res) => {
  league.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.json(result);
  });
});

router.post('/league/', (req, res) => {
  league.create({ name: req.body.name, users: [req.body.owner], size: req.body.size }, (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.json(result);
  });
});

export default router;
