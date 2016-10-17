/**
 * Created by admin on 17/10/2016.
 */
'use strict';
const router            = require('express').Router();

router.post('/login', (req, res) => {
    return res.status(200).json({ message: 'Authentication succeed.', data: { username: 'l.zenobi', name: 'Luca', surname: 'Zenobi' } });
});

module.exports = router;
