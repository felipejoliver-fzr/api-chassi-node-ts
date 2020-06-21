import express from 'express';

var router = express.Router();

router.get(
    '/',
    (req, res) => {
        res.status(200).json("Home test")
    }
);

export default router;