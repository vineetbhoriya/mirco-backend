// authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Augmenting the Request interface
declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload; // Adjust this based on your JWT payload type
  }
}

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not set");
}

  
export const authenticateJWT = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Unauthorized: No token provided")
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
    throw new Error("Unauthorized: Token missing")
    }  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        throw new Error(err.message)
      }
      req.user = user as JwtPayload;
      next();
    });
  };
  
  