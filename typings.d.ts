declare module '*.module.css';
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

interface GitHubUser {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}