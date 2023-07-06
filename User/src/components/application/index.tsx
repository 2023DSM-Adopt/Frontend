import { useNavigate } from "react-router-dom";
import { Calender } from "../common/calender";
import { DetailInformation } from "../contance";
import * as _ from "./style";

const detailData = DetailInformation; 

const img_url = localStorage.getItem("img_url");


export const Application = () =>{
    const navigate = useNavigate();
    return(
        <_.Background>
            <_.PetInformationFlex>
                <_.Flex>
                    <_.PetImg src={`${img_url}`}/>
                    <_.FlexFlex>
                        {
                            detailData.map((data, index) => (
                                <_.InfoFlex key={index}>
                                    <_.InfoBold>{data.bold}</_.InfoBold>
                                    <_.InfoMidum>{data.medium}</_.InfoMidum>
                                </_.InfoFlex>
                            ))
                        }
                    </_.FlexFlex>
                </_.Flex>
            </_.PetInformationFlex>
            <_.ApplicationInfoFlex>
                <_.ApplicationTitle>입양신청자 정보</_.ApplicationTitle>
                <_.Graph>
                    <_.GraphFlex>
                        <_.Name>입양자 이름</_.Name>
                        <_.Input width={150}/>
                        <_.PhoneNumber>휴대전화</_.PhoneNumber>
                        <_.Input width={250}/>
                    </_.GraphFlex>
                    <_.GraphFlex>
                        <_.Name>입양 예정 일/시</_.Name>
                        <Calender/>
                    </_.GraphFlex>
                    <_.GraphFlex>
                        <_.Name>신청 제목</_.Name>
                        <_.Input width={300}/>
                    </_.GraphFlex>
                    <_.GraphFlex>
                        <_.Content>내용</_.Content>
                        <_.ContentFlex>
                            <_.WarningMessage>※내용은 최대 한글 1,000자까지 가능합니다.</_.WarningMessage>
                            <_.ContentInput maxLength={1000}/>
                        </_.ContentFlex>
                    </_.GraphFlex>
                </_.Graph>
                <_.BtnFlex>
                    <_.ApplyBtn onClick={()=>{navigate("/main")}}>입양 신청</_.ApplyBtn>
                </_.BtnFlex>
            </_.ApplicationInfoFlex>
        </_.Background>
    );
}