import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies, deleteById, updateMovie } from "./controllers/movieController";

import { movieCreateValidation } from "./middleware/movieValidation";

import { validate } from "./middleware/handleValidation"
const router = Router();

export default router
.get("/test", (req: Request, res: Response) => {
    res.status(200).send("ok");
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id", deleteById)
.patch("/movie/:id", movieCreateValidation(), validate, updateMovie)
;
