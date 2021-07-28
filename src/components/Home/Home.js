import React  from 'react';
import * as S from './styled';
import { useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();

    function clientRedirect(){
        history.push('./client') 
    }

    function productRedirect(){
        history.push('./product')
    }

    return (
        <S.HomeContainer>
            <S.Content>
            <S.Button type="button" onClick={clientRedirect}> Client </S.Button >
            
            <S.Button type="button" onClick={productRedirect}> Product</S.Button >
            </S.Content>
        </S.HomeContainer>
    );
}

export default Home;