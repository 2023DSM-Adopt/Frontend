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

export const Div = styled.div`
    width: 55%;
    display: flex;
    gap: 30px;
    margin-top: 40px;
`;

export const ListFlex = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10%;
  margin-top: 3%;
`;

export default Main;
