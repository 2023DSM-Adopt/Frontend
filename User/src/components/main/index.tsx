import { styled } from "styled-components";
import Dropdown from "../common/dropDown";
import {
  areaDropDownItem,
  stateDropDownItem,
  animalDropDownItem,
} from "../constant";
import { useEffect, useState } from "react";
import List from "./list";
import { useNavigate } from "react-router-dom";
import { MainList } from "../contance";
import axios from "axios";

const Main = () => {

  // const [ListData, setListData] = useState<string[]>([""]);

  // useEffect(()=>{
  //   axios({
  //     method: 'get',
  //     url: 'https://d2af-119-203-74-135.ngrok-free.app/animals/list?town=부산광역시&animal_type=&status=',
  //     params:{
  //       town: "",
  //       animal_type: "",
  //       status: "",
  //     }
  //   }).then(function(result){
  //     setListData(result.data);
  //     console.log(result.data)
  //     console.log(ListData);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  // },[])

  const DataList = MainList;

  const [selectedOption, setSelectedOption] = useState("");
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
      
      <ListFlex>
        {
          DataList.map((data, index) => {
            return(
              <List
              name={data.name}
              gender={data.gender}
              shelter={data.shelter}
              stateText={data.stateText}
              state={data.state}
              img={data.image_url}
              key={index}
              />
            );
            })
        }
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
