'use strict';

const express = require('express');
const router = express.Router();
const {check, oneOf, validationResult} = require('express-validator');

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
            .exists({checkNull: true})
            .not().isString()
            .not().isInt()
            .isBoolean(),
        oneOf(
            [
                check('arg1')
                    .custom((value) => value === false),
                check('arg2')
                    .exists({checkNull: true})
                    .isString()
            ]
        )
    ];
}

module.exports = router;
