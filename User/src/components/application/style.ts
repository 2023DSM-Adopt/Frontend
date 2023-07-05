import { styled } from "styled-components";
import { Color } from "../../style/color";

interface InputType {
  width?: number;
}

export const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;
`;

export const PetInformationFlex = styled.div`
  width: 50%;
  height: 280px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
  margin-top: 4%;
  border-radius: 10px;
`;

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PetImg = styled.img`
  width: 45%;
  object-fit: cover;
  border-radius: 10px;
`;

export const FlexFlex = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  margin-top: 3%;
`;

export const InfoFlex = styled.div`
  display: flex;
  width: 85%;
  gap: 5%;
`;

export const InfoBold = styled.div`
  width: 24%;
  font-size: 20px;
  font-weight: bold;
`;

export const InfoMidum = styled.div`
  font-size: 20px;
  color: #505050;
`;

export const ApplicationInfoFlex = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ApplicationTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  padding: 1% 1%;
  margin-top: 7%;
  border-bottom: 2px solid ${Color.MainColor};
`;

export const Graph = styled.div`
  width: 100%;
`;

export const GraphFlex = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Color.GrayMain};
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  height: 60px;
  background-color: ${Color.headerColor};
`;

export const Input = styled.input<InputType>`
  width: ${(props) => props.width + "px"};
  height: 40px;
  outline: none;
  font-size: 18px;
  margin: 0 2%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  height: 200px;
  background-color: ${Color.headerColor};
  padding-top: 20px;
`;

export const InputFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const PhoneNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 20%;
  padding: 2% 0;
  background-color: ${Color.headerColor};
`;

export const ContentFlex = styled.div`
  width: 72%;
  margin-left: 20px;
  margin: 1% 0 1% 20px;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 160px;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  outline: none;
`;

export const WarningMessage = styled.div`
  font-size: 16px;
  color: ${Color.GrayMain};
`;

export const ApplyBtn = styled.button`
  width: 50%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 0;
  background-color: ${Color.MainColor};
  border-radius: 10px;
  &:hover {
    background-color: ${Color.MainColor};
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`;

export const BtnFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
