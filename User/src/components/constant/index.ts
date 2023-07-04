interface dropdownType {
  initialState: string;
  option: string[];
}

export const areaDropDownItem: dropdownType = {
  initialState: "대전",
  option: ["대전", "서울", "부산","광주","경기", "대구"],
};

export const animalDropDownItem: dropdownType = {
    initialState: "개",
    option: ["개", "고양이", "기타동물"],
  };
  
  export const stateDropDownItem: dropdownType = {
    initialState: "공고중",
    option: ["입양 가능", "입양 예정", "공고중"],
  };