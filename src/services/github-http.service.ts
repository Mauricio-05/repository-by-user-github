import axios from "axios";

import environmentConfig from "../config";

import { GithubService } from "./github.service";

class GithubHttpService implements GithubService {
  async getTop10PopularRepositoryByUser(userName: string): Promise<any> {
    const perPage = 100;
    const repos = [];

    let page = 1;

    let hasMoreData = true;

    while (hasMoreData) {
      const response = await axios.get(
        `${environmentConfig.API_URL_GITHUB}/users/${userName}/repos`,
        {
          params: {
            per_page: perPage,
            page,
          },
        }
      );

      if (response.data.length > 0) {
        repos.push(...response.data);
        page++;
      } else {
        hasMoreData = false;
      }
    }
    repos.sort(
      (repositoryOne, repositoryTwo) =>
        repositoryTwo.stargazers_count - repositoryOne.stargazers_count
    );

    const popularRepos = repos.slice(0, 10);

    return popularRepos.map((repo) => {
      return {
        name: repo.name,
        fullName: repo.full_name,
        private: repo.private,
        stars: repo.stargazers_count,
        topics: repo.topics,
      };
    });
  }
}

export default GithubHttpService;
