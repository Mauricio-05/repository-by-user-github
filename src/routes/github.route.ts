import {Request, Response, Router} from "express";

import GithubController from "../controllers/github.controller";

const router = Router();

router.get("/repos", (req: Request, res: Response, next) =>
    GithubController.getTop10PopularRepositoryByUser(req,res, next)
);

export default router;
