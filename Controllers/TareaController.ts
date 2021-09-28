import { Request, Response } from "express";
import Proyecto from "../model/Proyecto";
import Task from "../model/Task";

export const tareaIndex = async (req: Request, res: Response) => {
    // obtener el proyecto actual
    const proyecto = await Proyecto.findOne({ where: { url: req.params.url } });
    
};

export const tareaStore = async (req: Request, res: Response) => {
    const proyecto = await Proyecto.findOne({ where: { url: req.params.url } });
    if(!proyecto){
        return res.status(404).json(`No existe un proyecto relacionado a la url ${req.params.url}`);
    }
    const { name } = req.body;
    const status = 1;
    const ProyectoId = proyecto.id;

    const tareaSave = await Task.create({name, status, ProyectoId})
    res.json({data :tareaSave})

    
};
