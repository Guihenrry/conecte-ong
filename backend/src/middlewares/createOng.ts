import { Request, Response } from 'express';
import { createOng } from '../supabase';

export const createOngController = async (req: Request, res: Response) => {
try {
    const { nome, descricao, localizacao, areaAtuacao, contato, logo } = req.body;


    const newOng = {
    nome,
    descricao,
    localizacao,
    areaAtuacao,
    contato,
    logo, 
    };

    const data = await createOng(newOng);
    res.status(201).json({
    message: 'ONG criada com sucesso!',
    ong: data, 
    });
} catch (error) {
    if (error instanceof Error) {
    res.status(500).json({ error: error.message });
    } else {
    res.status(500).json({ error: 'An unknown error occurred' });
    }
}
};
