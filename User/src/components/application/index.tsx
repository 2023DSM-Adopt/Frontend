import * as _ from "./style";

export const Application = () =>{
    return(
        <_.Background>
            <_.PetInformationFlex>
                <_.ImgFlex>
                    <_.PetImg src="/assets/img/DetailImg.svg"/>
                </_.ImgFlex>
            </_.PetInformationFlex>
        </_.Background>
    );
}