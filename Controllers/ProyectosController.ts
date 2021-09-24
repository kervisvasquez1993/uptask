import { Request, Response } from "express";

export const proyectoIndex = (req: Request, res: Response) => {
    res.json({ data: "hola desde el controlador" });
};
export const proyectoStore = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        data: "enviaste el formulario",
        body
    });
};
