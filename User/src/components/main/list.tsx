import { styled } from "styled-components";


interface Props{
  name:string,
        gender:string,
        shelter:string,
        state:number,
        stateText:string
}
const List = ({name,gender,shelter,state,stateText}:Props) => {
  return (
    <ListWrapper>
      <Img src="/assets/img/ListImg.svg"></Img>
      <div>
        <Name>{name}</Name>
        <img src="/assets/img/LineImg.svg"></img>
        <GenderText>{gender}</GenderText>
      </div>
      <Shelter>{shelter}</Shelter>
      <State state={state}>{stateText}</State>
    </ListWrapper>
  );
};

const State = styled.div<{ state: number }>`
  color: #ff7f00;
  font-size: 26px;
  font-weight: 700;
  margin-top: 7px;
  color: ${(Props) =>
    Props.state === 1 ? "#04DF00" : Props.state === 2 ? "#FF7F00" : " #1867FF"};
`;
const ListWrapper = styled.div`
  > div {
    display: flex;
    > img {
      margin-left: 15px;
      margin-top: 9.5px;
    }
  }
`;

const Shelter = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 7px;
`;
const GenderText = styled.div`
  color: #505050;
  font-size: 20px;
  font-weight: 700;
  margin-top: 7px;
  margin-left: 15px;
`;

const Img = styled.img`
  border-radius: 8px;
  width: 330px;
  height: 220px;
  flex-shrink: 0;
`;

const Name = styled.div`
  margin-top: 7px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;
export default List;
