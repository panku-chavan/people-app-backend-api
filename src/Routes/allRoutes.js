const express = require('express');
const People = require('../Model/peoples');
const router = express.Router();

router.route('/peoples').get(async (req, res, next) => {
    try {
        let peoples = await People.find({});
        res.status(200).json(peoples);
    }
    catch (err) {
        res.status(500);
        next(err);
    }
});


router.route('/peoples/names').get(async (req, res, next) => {
    try {
        let peoples = await People.find({}).select("name");
        res.status(200).json(peoples);
    } catch (err) {
        res.status(500);
        next(err);
    }
});

router.route("/peoples/:id").get(async (req, res, next) => {
    const id = req.params.id;
    try {
        const people = await People.findById(id);
        res.status(200).json(people);

    } catch (err) {
        res.status(404).json({ messege: "Sorry....! You enter wrong ID, No such subscriber found in this ID." })
        next(err);
    }

});

router.route('/peoples').post(async (req, res, next) => {
    let people = new People({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        dob: req.body.dob,
        gender: req.body.gender
    });
    await people.save();
    res.send(people);
});

router.route('/peoples/edit/:id').put(async (req, res) => {
    const id = req.params.id;
    try {
        const people = await People.findByIdAndUpdate(id, {

            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            dob: req.body.dob,
            gender: req.body.gender

        });
        res.send("Updated Successfully....");
    }
    catch (err) {
        res.send(err);
    }
})

router.route('/peoples/delete/:id').delete(async (req, res, next) => {
    const id = req.params.id;
    try {
        await People.deleteOne({ _id: id });
        res.send("deleted successfull");
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;