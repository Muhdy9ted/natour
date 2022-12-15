"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const tours = [
    { tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12) },
    { tourName: 'Toronto tour', tourDate: new Date(2022, 10, 22) },
    { tourName: 'New York tour', tourDate: new Date(2022, 8, 9) }
];
router.post('/api/v1/tour', (req, res, next) => {
    const body = req.body;
});
router.get('/api/v1/tours', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours
        }
    });
});
router.get('/api/v1/tours/:id', (req, res, next) => {
    const reqId = req.params.id;
    if (reqId) {
        const tour = { tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12) };
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    }
    else {
        res.status(404).json({
            status: 'fail',
            message: 'Data not found'
        });
    }
});
router.patch('api/v1/tours/:id', (req, res, next) => {
    const reqId = req.params.id;
    if (reqId) {
        const tour = { tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12) };
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    }
    else {
        res.status(404).json({
            status: 'fail',
            message: 'Data not found'
        });
    }
});
router.delete('api/v1/tours/:id', (req, res, next) => {
    const reqId = req.params.id;
    if (reqId) {
        const tour = { tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12) };
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    else {
        res.status(404).json({
            status: 'fail',
            message: 'Data not found'
        });
    }
});
exports.default = router;
