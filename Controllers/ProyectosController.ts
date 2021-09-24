import { Request, Response } from "express";

export const proyectoIndex = (req: Request, res: Response) => {
    res.json({ data: "hola desde el controlador" });
};
export const proyectoStore = (req: Request, res: Response) => {
    const { body } = req;
    const nombre: string = body.nombre;
    if (nombre.length <= 0) {
        return res.status(400).json({ data: "el nombre es requerido" });
    }
    res.json({
        data: "enviaste el formulario",
        body,
    });
};
