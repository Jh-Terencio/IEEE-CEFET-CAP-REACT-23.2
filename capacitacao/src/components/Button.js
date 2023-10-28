// Forma mais simples de componente
function Button1() {
    return (
        <button type="button">Botao</button>
    )
}

// Propriedades (props)
function Button2(props) {
    //Propriedades dos componentes definem valores, funcoes e elementos que passaremos quando chamarmos o componente
    return (
        <button type="button">
            {props.text}
        </button>
    )
}

//propriedades desestruturadas
export default function Button({text, children}){
  return(
    <button type="button">
      {text} 
      {children}
    </button>
  )
}