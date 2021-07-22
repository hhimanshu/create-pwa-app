declare module '*.module.css';
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
declare module '*.png' {
  //import { ReactElement, SVGProps } from 'react';
  const content: string;
  export default content;
}
