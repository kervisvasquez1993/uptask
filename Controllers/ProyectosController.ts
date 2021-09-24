import { Request, Response } from "express";
import Proyecto from "../model/Proyecto";

export const proyectoIndex = (req: Request, res: Response) => {
    res.json({ data: "hola desde el controlador" });
};
export const proyectoStore = async (req: Request, res: Response) => {
    const { body } = req;
    const nombre: string = body.nombre;
    if (nombre.length <= 0) {
        return res.status(400).json({ data: "el nombre es requerido" });
    }
    const proyecto =  await Proyecto.create(body)
    res.json({
        data : proyecto,
        body,
    });
};
