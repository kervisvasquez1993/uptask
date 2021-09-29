import { Request, Response } from "express";
import Proyecto from "../model/Proyecto";
import Task from "../model/Task";

export const tareaIndex = async (req: Request, res: Response) => {
    // obtener el proyecto actual
    const proyecto = await Proyecto.findOne({ where: { url: req.params.url } });
    if (!proyecto) {
        return res.status(404).json({
            data: `No existe ningun proyecto asociado a la url ${proyecto}`,
        });
    }
    const tareas = await Task.findAll({
        where: { ProyectoId: proyecto.id } /*  include : [
        {model :Proyecto}
    ] */,
    });

    res.json({ data: tareas });
};

export const tareaProyecto = async (req: Request, res: Response) => {
    try {
        const proyecto = await Proyecto.findOne({
            where: { url: req.params.url },
        });
        if (!proyecto) {
            return res
                .status(404)
                .json(
                    `No existe un proyecto relacionado a la url ${req.params.url}`
                );
        }
        const { name } = req.body;
        const status = 0;
        const ProyectoId = proyecto.id;

        const tareaSave = await Task.create({ name, status, ProyectoId });
        res.json({ data: tareaSave });
    } catch (e) {
        throw e;
    }
};
export const tareaUpdate = async (req: Request, res: Response) => {
    const id = req.params.id;
    const tarea = await Task.findByPk(id);
    if (!tarea) {
        return res
            .status(404)
            .json({ data: `el id ${id} no esta asociado a ninguna tarea` });
    }
    let status = 0;
    if (status === tarea.status) {
        status = 1;
    }
    tarea.status = status;
    const resultado = await tarea.save();
    res.json({ data: resultado });
};
