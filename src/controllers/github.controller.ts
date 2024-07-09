import { Request, Response, NextFunction } from "express";

import GithubServiceImpl from "../services/github_impl.service";

import { GithubService } from "../types/github.type";

class GithubController {
  // Dependency injection
  constructor(private GithubService: GithubService) {}

  async getTop10PopularRepositoryByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {username} = req.query as { username: string };

      const repos = await this.GithubService.getTop10PopularRepositoryByUser(username);

      res.status(200).json({
        data: repos,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new GithubController(new GithubServiceImpl());
