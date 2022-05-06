import { createGlobalStyle } from "styled-components";

import BebasNeue from "../src/assets/fonts/BebasNeue-Regular.otf";


export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeue}) format('opentype');
        font-weight: 300;
        letter-spacing: 7px;
    }
`;
