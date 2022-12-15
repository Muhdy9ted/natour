import { Router } from "express";

import { RequestBody } from '../utilities/typesAliases/typeAliases';
import Tour from '../utilities/interfaces/tour'

const router = Router();
const tours: Tour[] = [
    {tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12)},
    {tourName: 'Toronto tour', tourDate: new Date(2022, 10, 22)},
    {tourName: 'New York tour', tourDate: new Date(2022, 8, 9)}
]

router.post('/api/v1/tour', (req, res, next) =>{
    const body = req.body as RequestBody;
});

router.get('/api/v1/tours', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours
        }
    })
});

router.get('/api/v1/tours/:id', (req, res, next) => {
    const reqId = req.params.id;
    if(reqId){
        const tour:Tour = {tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12)};
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    }else{
        res.status(404).json({
            status: 'fail',
            message: 'Data not found'
        })
    }

})

router.patch('api/v1/tours/:id', (req, res, next) => {
    const reqId = req.params.id;
    if(reqId){
        const tour:Tour = {tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12)};
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    }else{
        res.status(404).json({
            status: 'fail',
            message: 'Data not found'
        })
    }
})

router.delete('api/v1/tours/:id', (req, res, next) => {
    const reqId = req.params.id;
    if(reqId){
        const tour:Tour = {tourName: 'Dubia tour', tourDate: new Date(2022, 11, 12)};
        res.status(204).json({
            status: 'success',
            data: null
        })
    }else{
        res.status(404).json({
            status: 'fail',
            message: 'Data not found'
        })
    }
})

export default router;
