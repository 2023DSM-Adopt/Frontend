import { styled } from "styled-components";
import { Color } from "../../style/color";

export const Background = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${Color.headerColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoFlex = styled.div`
  width: 70%;
`;

export const Logo = styled.img`
  cursor: pointer;
`;
