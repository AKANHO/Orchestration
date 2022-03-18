import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        res.status(500).json({message: 'sorry we only accept GET request'})
    }
    res.json([{brand: 'audi', model: 'a1' }, {brand: 'fiat', model: '500' },{brand: 'car', model: 'greate car' }])
}