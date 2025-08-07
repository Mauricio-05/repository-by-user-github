export interface GithubService {
  getTop10PopularRepositoryByUser(username: string): Promise<any>;
}
