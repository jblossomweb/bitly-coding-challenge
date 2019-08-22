const paths = {
  fetching: () => ['bitlinks', 'fetching'],
  fetchingClicks: () => ['bitlinks', 'fetchingClicks'],
  error: () => ['bitlinks', 'error'],
  clicksError: () => ['bitlinks', 'clicksError'],
  links: () => ['bitlinks', 'links'],
  link: (shortUrl: string) => ['bitlinks', 'links', shortUrl],
  linkTitle: (shortUrl: string) => ['bitlinks', 'links', shortUrl, 'title'],
  linkClicks: (shortUrl: string) => ['bitlinks', 'links', shortUrl, 'clicks'],
};

export default paths;
