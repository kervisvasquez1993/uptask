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
    const proyecto = await Proyecto.findOne({where : { nombre : body.nombre},})
    if(proyecto){
        return res.status(400).json({data: `ya existe un proyecto con el nombre : ${nombre}`})
    }
     const proyectoSave = await Proyecto.create(body)
    res.json({
        data : proyectoSave
    });
};
