import Songs from '../../public/Songs.json'

const Folders=({setCategoria,setListado,setOption})=>{
    function Select(i){
        switch (i) {
            case 1:
                document.documentElement.style.setProperty('--first-color', '#DCD7C9');
                document.documentElement.style.setProperty('--second-color', '#A27B5C');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Salsa"));
                setCategoria("Salsa");
                break;
            case 2:
                document.documentElement.style.setProperty('--first-color', '#FFE3A9');
                document.documentElement.style.setProperty('--second-color', '#D38F8B');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Romantica"));
                setCategoria("Romantica");
                break;
            case 3:
                document.documentElement.style.setProperty('--first-color', '#E4DCCF');
                document.documentElement.style.setProperty('--second-color', '#7D9D9C');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Pop"));
                setCategoria("Pop");
                break;
            case 4:
                document.documentElement.style.setProperty('--first-color', '#E7AB79');
                document.documentElement.style.setProperty('--second-color', '#B25068');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="RockEng"));
                setCategoria("RockEng");
                break;
            case 5:
                document.documentElement.style.setProperty('--first-color', '#FFE5B4');
                document.documentElement.style.setProperty('--second-color', '#E8AA42');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="RockEsp"));
                setCategoria("RockEsp");
                break;   
            case 6:
                document.documentElement.style.setProperty('--first-color', '#B3E8E5');
                document.documentElement.style.setProperty('--second-color', '#3BACB6');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Electrosw")); 
                setCategoria("Electrosw");   
                break;
            case 7:
                document.documentElement.style.setProperty('--first-color', '#EEEEEE');
                document.documentElement.style.setProperty('--second-color', '#476072');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Instrumental"));
                setCategoria("Instrumental");    
                break;
        }
        setOption(1);

    }
    return(
        <div className="my-3">
            <div className="bg-primary rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(1)}>Salsa</div>
            <div className="bg-secondary rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(2)}>Romántica</div>
            <div className="bg-success rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(3)}>Pop</div>
            <div className="bg-info rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(4)}>Rock en Inglés</div>
            <div className="bg-warning rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(5)}>Rock en Español</div>
            <div className="bg-danger rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(6)}>Electroswing</div>
            <div className="bg-dark rounded-3 p-2 h3 text-light toChoose" onClick={()=> Select(7)}>Instrumental</div>
        </div>
    )
}
export default Folders;