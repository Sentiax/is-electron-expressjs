import { Request, Response } from 'express';

declare function isBrowserElectron(req: Request, res: Response): boolean;

export = isBrowserElectron;
