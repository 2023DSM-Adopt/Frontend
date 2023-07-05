import { useNavigate } from "react-router-dom";
import { GraphInfromation } from "../contance";
import * as _ from "./style";

export const Detail = () => {

    const dataList = GraphInfromation;
    const navigate = useNavigate();

    return(
        <_.Backgorund>
            <_.MainImg src="/assets/img/DetailImg.svg"/>
            <_.GraphFlex>
                <_.GraphTitle>정보</_.GraphTitle>
                <_.GraphList>
                    {
                        dataList.map(data=>{
                            return(
                                <_.Graph>
                                    <_.GraphBold>{data.bold}</_.GraphBold>
                                    <_.GraphMedium graphState={data.state}>{data.medium}</_.GraphMedium>
                                </_.Graph>
                            )
                        })
                    }
                </_.GraphList>
                <_.ApplicationBtn onClick={()=>{navigate("/application")}}>입양 신청하기</_.ApplicationBtn>
            </_.GraphFlex>
        </_.Backgorund>
    );
}