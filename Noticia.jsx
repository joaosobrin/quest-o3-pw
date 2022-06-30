import { useState } from 'react';
import Button from './Button';
import './Noticia.css';

function Noticia({horario, desc}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);

    function aumentarVisualizacoes(){
        setNumeroVisualizacoes(numeroVisualizacoes+1)
    }

    return(
        <div className='card'>
            <p className='data'>{horario}</p>
            <p className="desc">{desc}</p>
        </div>
    );
}
export default Noticia;