const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("u shouldnt be seeing this")
});

router.get('/projects', (req, res) => {
    const stuff = [
        {id: 1, title: 'Maddi.DEV', type: 'Website'},
        {id: 2, title: 'VR Camping', type: 'VR Prototype'},
        {id: 3, title: 'Defend me', type: 'Mobile Game Prototype'}
    ]

    res.json(stuff)
});

module.exports = router