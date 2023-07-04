import { styled } from "styled-components";
import { Color } from "../../style/color";

type GraphColor = {
  graphState: string;
};

export const Backgorund = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10%;
`;

export const MainImg = styled.img`
  width: 35%;
  margin-top: 3%;
`;

export const GraphFlex = styled.div`
  width: 33%;
  margin-top: 3%;
`;

export const GraphTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  border-bottom: 2px solid ${Color.MainColor};
  padding: 1% 2%;
`;

export const GraphList = styled.div``;

export const Graph = styled.div`
  height: 60px;
  display: flex;
  border-bottom: 1px solid ${Color.GrayMain};
`;

export const GraphBold = styled.div`
  width: 30%;
  background-color: ${Color.GraphColor};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
`;

export const GraphMedium = styled.div<GraphColor>`
  width: 70%;
  display: flex;
  align-items: center;
  padding-left: 3%;
  font-size: 18px;
  color: ${(props) =>
    props.graphState === "1"
      ? Color.GreenMain
      : props.graphState === "2"
      ? Color.OrangeMain
      : props.graphState === "3"
      ? Color.MainColor
      : "black"};
`;

export const ApplicationBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${Color.MainColor};
  font-size: 20px;
  color: white;
  border: none;
  margin-top: 10%;

  &:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`;
