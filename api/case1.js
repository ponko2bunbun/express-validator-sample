'use strict';

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

router.get('/', validateParam(), async (req, res) => {
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
			.exists({checkFalsy: true})
            .isString(),
        check('arg2')
            .optional({nullable: true})
            .isInt()
            .isLength({min: 2, max: 4}),
        check('arg3')
            .optional({nullable: true})
            .isInt()
            .isLength({min: undefined, max: 4}),
        check('arg4')
            .optional({nullable: true})
            .isInt()
            .isLength({min: 2, max: undefined})
    ];
}

module.exports = router;
