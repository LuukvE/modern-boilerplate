/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '@fortawesome/fontawesome-free/*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default Icon;
}

declare module '@/*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default Icon;
}
