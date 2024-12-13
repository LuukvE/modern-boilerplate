/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '@icon/font-awesome/icons/*.svg' {
  import * as React from 'react';
  const FontAwesomeIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default FontAwesomeIcon;
}
