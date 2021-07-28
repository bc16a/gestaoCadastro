import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Product() {
    const [price, setPrice] = useState(Number);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(Number);


    const history = useHistory();

    function saveData() {
        let prducts = localStorage.getItem('prducts');

        if (prducts != null) {
            prducts = JSON.parse(prducts)
            let prduct = {
                name: name,
                price: price,
                amount: amount
            }
            prducts.push(prduct);
            localStorage.setItem('prducts', JSON.stringify(prducts))

        } else {
            prducts = []
            let prduct = {
                name: name,
                price: price,
                amount: amount
            }
            prducts.push(prduct);
            localStorage.setItem('prducts', JSON.stringify(prducts))
        }

        history.push('./')
    }

    return (
        <S.Container>
            <S.Title>Product Register</S.Title>
            <S.LinkHome to="./">Back</S.LinkHome>
            <S.List>
                <S.ListItem className="NameInput" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <S.ListItem className="PriceInput" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <S.ListItem className="AmountInput" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                < button type="button" onClick={saveData}> Register </button >
            </S.List>
        </S.Container>
    )
}
