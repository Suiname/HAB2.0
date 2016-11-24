/**
 * Created by jt on 11/23/16.
 */

import { Router } from 'express'
import account from '../models/account';

const router = Router()

router.get('/test', (req, res) => {
    res.end('hi')
})

router.get('/tester', (req, res) => {
    res.json({test: 'test', what: 'what'});
})

router.post('/register', (req, res) => {
    console.log("Req.body: ", req.body);
    account.create({username: req.body.username, email: req.body.email, password:req.body.password}, (err, user) => {
        console.log(err)
        console.log(user)
        if (err) {
            res.sendStatus(400).send();
        }
        res.json({message: "Created User!", username: user.username});
    });
});

export default router;
