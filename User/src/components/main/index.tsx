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

const Main = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <MainContainer>
      <div>
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
      </div>
       {MainList.map((item) => (
        <List
        name={item.name}
        gender={item.gender}
        shelter={item.shelter}
        stateText={item.stateText}
        state={item.state}
        />
      ))}
    </MainContainer>
  );
};

const MainContainer = styled.div`
>div{
    display: flex;
    gap: 30px;
    margin-top: 40px;
    margin-left: 339px;
}
`;

export default Main;
