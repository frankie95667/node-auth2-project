const router = require('express').Router();

const { findByNoPass } = require("./user-model");

router.get('/', (req, res) => {
    findByNoPass({department: req.user.department})
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => res.status(500).json({errorMessage: "Failed at retrieving users"}))
})

module.exports = router;