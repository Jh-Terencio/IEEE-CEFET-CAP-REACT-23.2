export default function Button({text, children, fx}){
  return(
    <button type="button" onClick={fx}>
      {text} 
      {children}
    </button>
  )
}