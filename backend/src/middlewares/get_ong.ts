import { Request, Response, NextFunction } from 'express';
import { getOngs as getOngsService } from '../supabase';

export const getOngs = async (req: Request, res: Response, next: NextFunction) => {
  const { page = 1, pageSize = 10 } = req.query;
  
  try {
    const ongs = await getOngsService(Number(page), Number(pageSize));
    res.locals.ongs = ongs;
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
