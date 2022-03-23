import type { NextApiRequest, NextApiResponse } from 'next'
import { photos } from '../../../data'


export default function handler(req:NextApiRequest, res: NextApiResponse) {
    const id = req.query.id
    const filteredPhoto = photos.filter(photo => photo.id.toString() === id)
    if(filteredPhoto.length > 0) {
        res.status(200).json(filteredPhoto[0])
    }
    else {
        res.status(404).json({message: 'Record Not Found'})
    }
   
}