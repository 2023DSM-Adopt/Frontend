import { Outlet, useNavigate } from "react-router-dom";
import * as _ from "./style";

export const Header = () => {

    const navigate = useNavigate();

    return(
        <>
            <_.Background>
                <_.LogoFlex>
                    <_.Logo src="/assets/img/Logo.svg" onClick={()=>{navigate("/main")}}/>
                </_.LogoFlex>
            </_.Background>
            <Outlet/>
        </>
    );
}