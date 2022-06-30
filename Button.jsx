import "./Button.css";

function Button({frase}){
    return(
        <button className="maisNoticias" >
        {frase}
        </button>
    );
}

export default Button;