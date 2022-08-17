import { Request, Response } from "express";

import {MovieModel} from "../models/Movie"; "../models/Movie"

import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(200).json(movie);
    } catch (error:any) {
        Logger.error(`Error on create movie: ${error.message}`)
    }
}
