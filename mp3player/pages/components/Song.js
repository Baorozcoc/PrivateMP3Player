
function toStr(texto){
    return texto.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
}
function Contenido(Titulo,Autor,Duracion){
    var contenido=(
        <div className="m-2 p-1">
            <div className="h5">{Titulo}</div>
            <div className="d-flex justify-content-between">
                <div>{Autor}</div>
                <div>{Math.trunc(Duracion/60)}:{toStr(Duracion%60)}</div>
            </div>
        </div>
    )
    return contenido;
}
const Song=({Titulo, Autor, Duracion, Categoria, Ubicacion,setCancion})=>{
    function Sonar(){
        setCancion(new Audio(Ubicacion));
    }
    return(
        <div onClick={()=> Sonar()}>
            {Categoria==="Salsa"&&<div className="bg-primary rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            {Categoria==="Romantica"&&<div className="bg-secondary rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            {Categoria==="Pop"&&<div className="bg-success rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            {Categoria==="RockEng"&&<div className="bg-info rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            {Categoria==="RockEsp"&&<div className="bg-warning rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            {Categoria==="Electrosw"&&<div className="bg-danger rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            {Categoria==="Instrumental"&&<div className="bg-dark rounded-3 text-light toChoose">{Contenido(Titulo,Autor,Duracion)}</div>}
            
        </div>
    )
}
export default Song;