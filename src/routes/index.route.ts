import {Request, Response, Router} from "express";

import routerGithub from "./github.route.js";

const router = Router();

router.use("/github", routerGithub);

router.get("/health", (_req: Request, res: Response) => res.status(200).json({ok: true}))

export default router;
