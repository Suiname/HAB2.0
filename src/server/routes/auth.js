/**
 * Created by jt on 11/23/16.
 */

import { Router } from 'express'
import account from '../models/account';
import jwt from 'jsonwebtoken';
import config from 'config';
const secret = config.get('secret');

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
        if (err) {
            res.sendStatus(400).send();
        }
        res.sendStatus(201).send();
    });
});

router.post('/login', (req, res) => {
    console.log("Trying login: ", req.body);
    account.findOne({username: req.body.username}, (err, user) => {
        if (err) {
            return res.status(400).send();
        }
        console.log("Logging in with user: ", user)
        if (!req.body.password){
            console.log("no password");
            return res.status(400).send();
        }
        user.comparePassword(req.body.password, (err, result) => {
            if (err) {
                return res.status(400).send();
            }
            if (!result){
                return res.status(401).send();
            }
            const token = jwt.sign(user, secret, {
                expiresIn: 1440 // expires in 24 hours
            });
            req.body.token = token;
            return res.json({
                success: true,
                message: "Logged in",
                token
            });
        })
    })
});

router.post('/logout', (req, res) => {
    console.log('Logout Server Side');
    res.json({ message: 'Logged out' });
});

export default router;
