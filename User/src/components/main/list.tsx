import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
// import { Color } from "../../style/color";


interface Props{
  name:string,
  gender:string,
  shelter:string,
  state:number,
  stateText:string,
  img: string,
}
const List = ({name,gender,shelter,state,stateText,img}:Props) => {

  const navigate = useNavigate();

  console.log(img)

  const hadlePageRouter = () =>{
    localStorage.setItem("img_url", img);
    navigate("/detail");
  }

  return (
    <ListWrapper onClick={hadlePageRouter}>
      <Img src={img}></Img>
      <Flex>
        <Name>{name}</Name>
        <Line/>
        <GenderText>{gender}</GenderText>
      </Flex>
      <Shelter>{shelter}</Shelter>
      <State state={state}>{stateText}</State>
    </ListWrapper>
  );
};

const State = styled.div<{ state: number }>`
  color: #ff7f00;
  font-size: 26px;
  font-weight: 700;
  padding-left: 10px;
  margin-bottom: 10px;
  color: ${(Props) =>
    Props.state === 1 ? "#04DF00" : Props.state === 2 ? "#FF7F00" : " #1867FF"};
`;

const ListWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
    transition: all 0.3s;
    border-radius: 10px;
  }
`;

const Shelter = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
`;
const GenderText = styled.div`
  color: #505050;
  font-size: 20px;
  font-weight: 700;
`;

const Img = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 220px;
  flex-shrink: 0;
  object-fit: cover;
`;

const Name = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 2px;
  height: 80%;
  background-color: black;
`;

const Flex = styled.div`
  display: flex;
  align-content: center;
  gap: 15px;
  padding-left: 10px;
`;
export default List;
