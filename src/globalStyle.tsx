import { createGlobalStyle } from "styled-components";

import BebasNeue from "../src/assets/fonts/BebasNeue-Regular.otf";
import Astro from "../src/assets/fonts/ASTRO.ttf";
import Marske from "../src/assets/fonts/Marske.otf";
import Phage from "../src/assets/fonts/phage.otf";
import Nidsans from "../src/assets/fonts/nidsans-webfont.ttf";
import LibelSuit from "../src/assets/fonts/libel-suit-rg.otf";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeue}) format('opentype');
        font-weight: 300;
        letter-spacing: 7px;
    }

    @font-face {
        font-family: 'Astro';
        src: url(${Astro}) format('truetype');
    }

    @font-face {
        font-family: 'Marske';
        src: url(${Marske}) format('opentype');
    }

    @font-face {
        font-family: 'Phage';
        src: url(${Phage}) format('opentype');
    }

    @font-face {
        font-family: 'Nidsans';
        src: url(${Nidsans}) format('truetype');
    }

    @font-face {
        font-family: 'LibelSuit';
        src: url(${LibelSuit}) format('opentype');  
    }
`;
