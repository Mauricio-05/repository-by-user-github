import { Request, Response, NextFunction } from "express";

export const errorHandlerMiddleware = (
  _error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(500).json({
    status: 500,
    message: "Internal server error",
  });
};
