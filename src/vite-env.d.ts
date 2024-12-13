/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '@icon/font-awesome/icons/*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default Icon;
}
