import { Request, Response } from "express";
import Proyecto from "../model/Proyecto";
import Task from "../model/Task";

export const tareaIndex = async (req: Request, res: Response) => {
    // obtener el proyecto actual
    const proyecto = await Proyecto.findOne({ where: { url: req.params.url } });
    if (!proyecto) {
        return res
            .status(404)
            .json({
                data: `No existe ningun proyecto asociado a la url ${proyecto}`,
            });
    }
    const tareas = await Task.findAll({ where: { ProyectoId: proyecto.id } });

    res.json({data : tareas});
};

export const tareaStore = async (req: Request, res: Response) => {};
