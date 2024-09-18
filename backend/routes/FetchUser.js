const express = require('express')
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require("express-validator")



router.post('/FetchUser', body('email', 'Invalid email').isEmail(),
    body('password', 'password too short').isLength({ min: 4 }), async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ error: errors.array().toString(), success: false })
            }
            else {

                const data = await User.findOne({ email: req.body.email });
                if (data) {
                    const comparepassword = await bcrypt.compare(req.body.password, data.password)
                    if (comparepassword) {
                        res.status(200).json({ success: true })
                        console.log(data)
                    }
                    else {
                        res.status(404).json({ success: false })
                    }

                }
                else{
                    res.status(400).json({error:"User not found"})
                    console.log('User not found')
                }
            }
            } catch (e) {
                console.log(e)
            }
        })

module.exports = router

/*async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
} 
.toArray(function(err,data){
            if(err) console.log(Err)
                else{ console.log("found")
                 res.json(data)
            }

            
        }) */