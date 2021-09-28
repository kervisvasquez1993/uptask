import { Request, Response } from "express";
import slug from "slug";
import Proyecto from "../model/Proyecto";

export const proyectoIndex = async (req: Request, res: Response) => {
    const proyecto = await Proyecto.findAll();
    res.json({ data: proyecto });
};
export const proyectoStore = async (req: Request, res: Response) => {
    const { body } = req;
    // const nombre: string = body.nombre;
    // const url:string = slug(nombre).toLocaleLowerCase()
    const proyecto = await Proyecto.findOne({ where: { nombre: body.nombre } });
    if (proyecto) {
        return res
            .status(400)
            .json({
                data: `ya existe un proyecto con el nombre : ${body.nombre}`,
            });
    }
    const proyectoSave = await Proyecto.create(body);
    res.json({
        data: proyectoSave,
    });
};

export const proyectoShow = async (req: Request, res: Response) => {
    try {
        const url = req.params.url;
        const urlParams = await Proyecto.findOne({ where: { url } });
        if (!urlParams) {
            return res.json({ data: `No existe url asociada a ${url}` });
        }
        res.json({ data: urlParams });
    } catch (error) {
        throw error;
    }
};
