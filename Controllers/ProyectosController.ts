import { Request, Response } from "express";
import slug from "slug";
import Proyecto from "../model/Proyecto";

export const proyectoIndex = (req: Request, res: Response) => {
    res.json({ data: "hola desde el controlador" });
};
export const proyectoStore = async (req: Request, res: Response) => {
    const { body } = req;
    // const nombre: string = body.nombre;
    // const url:string = slug(nombre).toLocaleLowerCase()
    const proyecto = await Proyecto.findOne({ where: { nombre: body.nombre } });
    if (proyecto) {
        return res
            .status(400)
            .json({ data: `ya existe un proyecto con el nombre : ${body.nombre}` });
    }
    const proyectoSave = await Proyecto.create(body);
    res.json({
        data: proyectoSave,
    });
};
