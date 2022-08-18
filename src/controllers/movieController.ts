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

export async function findMovieById(req:Request, res:Response){
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        res.status(200).json(movie)
    } catch (error:any) {
        Logger.error(`Erro no sistema: ${error.message}`)
        return res.sendStatus(500).json({message: "Erro ao procurar filme"})
    }
}

export async function getAllMovies(req:Request, res:Response){
    try {
        const movies = await MovieModel.find();
        res.status(200).json(movies)
    } catch (error:any) {
        Logger.error(`Erro no sistema: ${error.message}`)
        return res.sendStatus(500)
    }
}

export async function deleteById(req:Request, res:Response){
    try {
        const id = req.params.id;
        const movie = await MovieModel.findByIdAndDelete(id);
        res.status(200).json({message: "Filme deletado com Sucesso"});
    } catch (error:any) {
        Logger.error(`Erro no sistema: ${error.message}`)
        return res.sendStatus(500).json({message: "Erro ao deletar filme"})
    }
}

export async function updateMovie(req:Request, res:Response){
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);
        await MovieModel.updateOne({_id:id}, data);
        res.status(200).json(data);
    } catch (error:any) {
        Logger.error(`Erro no sistema: ${error.message}`)
        return res.sendStatus(500).json({message: "Erro ao atualizar filme filme"})
    }
}

