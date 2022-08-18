import { body } from 'express-validator';

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("The title is Mandatory")
            .isLength({min: 5})
            .withMessage("Title must have minimum of 5 caracters "),
        body("rating")
            .isNumeric()
            .withMessage("rating must be a number")
        .custom((value:number)=>{
            if(value < 0 || value > 10){
                throw new Error("Rating must be between 0 and 10")
            }
            return true;
        }),
        body("description")
            .isString()
            .withMessage("Description is Mandatory"),
        body("director")
            .isString()
            .withMessage("Directors name is mandatory"),
        body("poster")
            .isURL()
            .withMessage("Poster is mandatory")

    ]
}
