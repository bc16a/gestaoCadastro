import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Client() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState(Number);


    const history = useHistory();

    function saveData() {
        let clients = localStorage.getItem('clients');

        if (clients != null) {
            clients = JSON.parse(clients)
            let client = {
                name: name,
                lastName: lastName,
                email: email,
                telephone: telephone
            }
            clients.push(client);
            localStorage.setItem('datas', JSON.stringify(clients))

        } else {
            clients = []
            let client = {
                name: name,
                lastName: lastName,
                email: email,
                telephone: telephone
            }
            clients.push(client);
            localStorage.setItem('clients', JSON.stringify(clients))
        }

        history.push('./')
    }

    return (
        <S.Container>
            <S.Title>Client Register</S.Title>
            <S.LinkHome to="./">Back</S.LinkHome>
            <S.List>
                <S.ListItem className="NameInput" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <S.ListItem className="LastNameInput" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <S.ListItem className="emailInput" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <S.ListItem className="TelephoneInput" placeholder="Telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />
                < button type="button" onClick={saveData}> Register </button >
            </S.List>
        </S.Container>
    )
}
