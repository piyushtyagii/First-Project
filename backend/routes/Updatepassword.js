const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const myValidationResult = validationResult.withDefaults({
    formatter: error => error.msg,
});



router.post('/UpdatePassword',
    body('newpassword', 'password too short').isLength({ min: 5 })
    , async (req, res) => {

        try {
            const errors = myValidationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array().toString(), update: false })
            }
            else {
                    const user = await User.findOne({ email: req.body.email });
                    if (user) {
                        const comparepassword = await bcrypt.compare(req.body.password, user.password)
                        if (!comparepassword) {
                            res.status(400).json({ error: "wrong-current-password", success: false })
                        }
                        else {
                            const salt = await bcrypt.genSalt(10);
                            const securepassword = await bcrypt.hash(req.body.newpassword, salt)
                            console.log(req.body.newpassword)
                            await User.updateOne({ email: req.body.email }, { $set: { password: securepassword } })
                            console.log("user updated successfully")
                            res.status(200).json({ error: "updated", success: true })

                        }
                    }
                    else {
                        res.status(400).json({ error: "user not found", success: false })
                    }
            
            }
        } catch (e) {
            console.log(e)
        }
    })

module.exports = router;