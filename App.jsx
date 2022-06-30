import Title from './Title';
import Button from './Button';
import Noticia from './Noticia';
import "./App.css"

function App() {
    const lista_noticias = [
        {
            hour: "1",
            description: "Funcionário que denunciou procurador diz que agressor 'desprezava mulheres' e teme sair na rua: Muito medo" 
        },        
        {
            hour: "2",
            description: "Imposto de Renda 2022: Receita abre consulta ao 2° lote de restituição nesta quinta; veja se você está no grupo"
        },
        {
            hour: "3",
            description: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro"
        },
        {
            hour: "4",
            description: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos"
        },
        {
            hour: "5",
            description: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'"
        },
    ];

    return (
        <div className='container'>
            <Title />

            {lista_noticias.map((noticia) => {
                return <Noticia horario={noticia.hour} desc={noticia.description} />
            })}

            

        </div>

    );
}

export default App
