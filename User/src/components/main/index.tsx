import { styled } from "styled-components";
import Dropdown from "../common/dropDown";
import {
  areaDropDownItem,
  stateDropDownItem,
  animalDropDownItem,
} from "../constant";
import { useState } from "react";
import List from "./list";
import { MainList } from "../contance";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleDropdownOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <MainContainer>
      <NavFlex>
        <MainTitle>
          보호 동물
        </MainTitle>
        <Div>
          <Dropdown
            options={areaDropDownItem}
            width={170}
            onClick={handleDropdownOption}
          />
          <Dropdown
            options={stateDropDownItem}
            width={160}
            onClick={handleDropdownOption}
          />
          <Dropdown
            options={animalDropDownItem}
            width={160}
            onClick={handleDropdownOption}
          />
        </Div>
      </NavFlex>
      
      <ListFlex onClick={()=>{navigate("/detail")}}>
        {MainList.map((item) => (
            <List
            name={item.name}
            gender={item.gender}
            shelter={item.shelter}
            stateText={item.stateText}
            state={item.state}
            />
        ))}
      </ListFlex>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin-top: 40px;
`;

const MainTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Div = styled.div`
    width: 55%;
    display: flex;
    gap: 30px;
`;

const ListFlex = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
  margin-bottom: 10%;
  margin-top: 3%;
  margin-left: 5%;
`;

export default Main;
