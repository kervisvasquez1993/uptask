import { Request, Response } from "express"


export const nosotrosIndex = (req: Request, res: Response) => {
    res.json({data : "hola desde el controlador"});
}