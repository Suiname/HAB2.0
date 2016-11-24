/**
 * Created by jt on 11/23/16.
 */

import { Router } from 'express'

const router = Router()

router.get('/test', (req, res) => {
    res.end('hi')
})

router.get('/tester', (req, res) => {
    res.json({test: 'test', what: 'what'});
})

export default router;
