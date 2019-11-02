'use strict';

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

router.post('/', validateParam(), async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).end();
        return;
    }

    res.status(200).end();
});

function validateParam() {
	return [
        check('arg1')
            .exists({nullable: true})
            .not().isString()
            .isInt(),
        check('arg2')
            .optional({nullable: true})
            .isString()
            .isInt(),
        check('arg3')
            .optional({nullable: true})
            .not().isString()
            .not().isInt()
            .isBoolean()
    ];
}

module.exports = router;
