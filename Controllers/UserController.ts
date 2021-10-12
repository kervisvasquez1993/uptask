import { Request, Response, NextFunction } from "express";
import User from "../model/User";
import bcryptjs from "bcryptjs"

export const newUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const validarEmail = await User.findOne({ where : { email} })

    if(validarEmail){
        return res.json({data : `el email ${email} ya esta en uso`  })
    }

     

    // generar hash para la contraseña

     bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))
    
    const newUser = await User.create({ email, password });

    res.json({ data: newUser });
};
