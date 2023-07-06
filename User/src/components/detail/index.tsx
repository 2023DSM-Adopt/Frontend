import { useNavigate } from "react-router-dom";
import { GraphInfromation } from "../contance";
import * as _ from "./style";

export const Detail = () => {

    const dataList = GraphInfromation;
    const navigate = useNavigate();
    const img_url = localStorage.getItem("img_url");

    return(
        <_.Backgorund>
            <_.MainImg src={`${img_url}`}/>
            <_.GraphFlex>
                <_.GraphTitle>정보</_.GraphTitle>
                <_.GraphList>
                    {
                        dataList.map((data, index)=>{
                            return(
                                <_.Graph key={index}>
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