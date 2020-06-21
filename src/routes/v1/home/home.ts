import express from 'express';
import HomeService from '@services/home';

var router = express.Router();

router.get(
    '/',
    (req, res) => {
        res.status(200).json(HomeService.get())
    }
);

export default router;