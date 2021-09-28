import { Request, Response } from "express";
import Task from "../model/Task";

export const tareaIndex = (req: Request, res: Response) => {
    res.json({ data: "hola desde tarea" });
};
