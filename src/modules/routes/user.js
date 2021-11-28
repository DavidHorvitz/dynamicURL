const express = require(`express`);
const router = express.Router();


router.get('/:name/:id', (req, res) => {
    res.send(`User ${req.params.name} entered the system. The ID is ${req.params.id}`);
});

router.get(`/about-me`, (req, res) => {
    res.send(`about me !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! `);
});
module.exports = router;