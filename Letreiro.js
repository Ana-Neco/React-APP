import React, {useState, useEffect} from 'react';
import './Letreiro.css';

function Letreiro() {

    const texto = 'Conheça a Fatec';
    const [letreiroText, setLetreiroText] = useState('');

    useEffect(() => {
        let i = 0;

        const typeWriter = () => {
            if (i <= texto.length) {
                setLetreiroText(texto.slice(0, i));
                i++;
            } else {
                i = 0; // Reinicie o letreiro
            }
        };

        const intervalId = setInterval(typeWriter, 200);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="letreiro-container">
            <h1>Letreiro</h1>
            <p>{letreiroText}</p>
        </div>
    );
}

export default Letreiro;
