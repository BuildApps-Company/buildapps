import styled from 'styled-components';
import {colors} from '../data/colors';

export const Button1 = styled.a`
    padding: 15px 30px;
    display: inline-block;
    border: 2px solid ${colors.Main};
    font-size: 2em;
    text-transform: uppercase;
    color: ${colors.Main};
    text-decoration: none;
    &hover {
        color:${colors.Main};
    }
    &visited {
        color:${colors.Main};
    }
`;

export const Button2 = styled.a`
    font-size: 64px;
    display: inline-block;
    color: ${colors.White};
    text-decoration: none;
    border-bottom: 6px solid ${colors.Main};
    padding-bottom: 2px;
    &hover {
        color:${colors.White};
    }
    &visited {
        color:${colors.White};
    }
`;