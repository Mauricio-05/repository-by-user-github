import { Request, Response, NextFunction } from "express";

import GithubServiceImpl from "../services/github-http.service";

import { GithubService } from "../services/github.service";

class GithubController {
  constructor(readonly GithubService: GithubService) {}

  async getTop10PopularRepositoryByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { username } = req.query as { username: string };

      const repos = await this.GithubService.getTop10PopularRepositoryByUser(
        username
      );

      res.status(200).json({
        data: repos,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new GithubController(new GithubServiceImpl());
