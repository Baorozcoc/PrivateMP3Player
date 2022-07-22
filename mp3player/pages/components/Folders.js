import Songs from '../../public/Songs.json'

const Folders=({setCategoria,setListado,setOption})=>{
    function Select(i){
        switch (i) {
            case 1:
                document.documentElement.style.setProperty('--first-color', '#FEF1E6');
                document.documentElement.style.setProperty('--second-color', '#FFB085');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Salsa"));
                setCategoria("Salsa");
                break;
            case 2:
                document.documentElement.style.setProperty('--first-color', '#FFF9CA');
                document.documentElement.style.setProperty('--second-color', '#E0B67F');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Romantica"));
                setCategoria("Romantica");
                break;
            case 3:
                document.documentElement.style.setProperty('--first-color', '#EEE6CD');
                document.documentElement.style.setProperty('--second-color', '#90C8AC');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Pop"));
                setCategoria("Pop");
                break;
            case 4:
                document.documentElement.style.setProperty('--first-color', '#E3BFA1');
                document.documentElement.style.setProperty('--second-color', '#641C1C');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="RockEng"));
                setCategoria("RockEng");
                break;
            case 5:
                document.documentElement.style.setProperty('--first-color', '#FFE5B4');
                document.documentElement.style.setProperty('--second-color', '#7F99CB');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="RockEsp"));
                setCategoria("RockEsp");
                break;   
            case 6:
                document.documentElement.style.setProperty('--first-color', '#9FE3C6');
                document.documentElement.style.setProperty('--second-color', '#38A3A5');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Electrosw")); 
                setCategoria("Electrosw");   
                break;
            case 7:
                document.documentElement.style.setProperty('--first-color', '#E2F2F2');
                document.documentElement.style.setProperty('--second-color', '#3A7778');
                setListado(Songs.songs.filter(cancion=>cancion.Categoria==="Instrumental"));
                setCategoria("Instrumental");    
                break;
        }
        setOption(1);

    }
    return(
        <div className="my-3 h-50 d-flex flex-wrap">
            <div className="bg-primary rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder Salsa" onClick={()=> Select(1)}>Salsa</div>
            <div className="bg-secondary rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder Roman" onClick={()=> Select(2)}>Romántica</div>
            <div className="bg-success rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder Pop" onClick={()=> Select(3)}>Pop</div>
            <div className="bg-info rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder Rock" onClick={()=> Select(4)}>Rock en Inglés</div>
            <div className="bg-warning rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder RockEsp" onClick={()=> Select(5)}>Rock en Español</div>
            <div className="bg-danger rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder Electro" onClick={()=> Select(6)}>Electroswing</div>
            <div className="bg-dark rounded-3 m-2 p-2 h2 h-75 d-inline-flex align-items-end text-light toChoose Folder Instrum" onClick={()=> Select(7)}>Instrumental</div>
        </div>
    )
}
export default Folders;