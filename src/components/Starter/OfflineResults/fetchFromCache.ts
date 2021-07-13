import { GithubUser } from '../../../../types';

const findGitHubRequests: () => Promise<Response[]> = async () => {
  // Get a list of all of the caches for this origin
  const cacheNames: string[] = await caches.keys();
  const result = [];

  for (const name of cacheNames) {
    // Open the cache
    const cache = await caches.open(name);

    // Get a list of entries. Each item is a Request object
    for (const request of await cache.keys()) {
      // If the request URL matches, add the response to the result
      if (request.url.includes('api.github.com')) {
        result.push(await cache.match(request));
      }
    }
  }

  return result;
};

export const getCachedGithubUsers: () => Promise<GithubUser[]> = async () => {
  const httpResponses = await findGitHubRequests();
  const githubUsers = await httpResponses.map(response =>
    response.json().then((user: GithubUser) => user)
  );
  return Promise.all(githubUsers);
};
