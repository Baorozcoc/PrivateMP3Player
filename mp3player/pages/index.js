import Head from 'next/head'
import { useState } from 'react'
import Songs from '../public/Songs.json'
import List from './components/List';
import Folders from './components/Folders';
import Player from './components/Player';

export default function Home() {
  const [orden, setOrden]=useState("Antiguo"); //Orden de reproducción
  const [listado, setListado]=useState([]); //Listado de canciones
  const [cancion, setCancion]=useState(null); //Canción actual
  const [reproduciendo,setReproduciendo]=useState(0);
  const [titulo, setTitulo]=useState(""); //Titulo canción actual
  const [autor, setAutor]=useState(""); //Autor canción actual
  const [duracion, setDuracion]=useState(0); //Duración canción actual
  const [repetir, setRepetir]=useState("No"); //Repetir canción o lista
  const [categoria, setCategoria]=useState(1); //Categoría canción actual
  const[option, setOption]=useState(0);

  function AllSongs(){
    setListado(Songs.songs);
    setOption(1);
  }
  return (
    <div className='fondo w-100 vh-100'>
      <Head>
        <title>MP3 Player</title>
        <meta name="description" content="MP3 Player to private use" />
        <link rel="icon" href="/icono.png" />
      </Head>
      <div className='p-2 Logo h1'>
        <img src='/logo.png' alt='Logo' className='mx-2'/>MP3 Player
      </div>
      <div className='mx-4 h-75'>
        {option===1
          ?<button type="button" onClick={()=> AllSongs()} className="btn btn-primary fw-bolder">Todas las canciones</button>
          :<button type="button" onClick={()=> AllSongs()} className="btn btn-outline-primary fw-bolder">Todas las canciones</button>
        }
        {option===2
          ?<button type="button" onClick={()=> setOption(2)} className="btn btn-primary fw-bolder">Por Categorias</button>
          :<button type="button" onClick={()=> setOption(2)} className="btn btn-outline-primary fw-bolder">Por Categorias</button>
        }
        {cancion!==null?
        <div className='contenedor overflow-auto p-3 songs'>
          {option===1&&listado.length!==0&&
            <List listado={listado} setListado={setListado} orden={orden} setOrden={setOrden} cancionGlobal={cancion} setCancionGlobal={setCancion} setReproduciendo={setReproduciendo} setTitulo={setTitulo} tituloActual={titulo} setAutor={setAutor} setDuracion={setDuracion} setCategoria={setCategoria}/>
          }
          {option===2&&<Folders setCategoria={setCategoria} setListado={setListado} setOption={setOption}/>}

        </div>
        :<div className='contenedor overflow-auto p-3 h-100'>
        {option===1&&listado.length!==0&&
          <List listado={listado} setListado={setListado} orden={orden} setOrden={setOrden} cancionGlobal={cancion} setCancionGlobal={setCancion} setReproduciendo={setReproduciendo} setTitulo={setTitulo} tituloActual={titulo} setAutor={setAutor} setDuracion={setDuracion} setCategoria={setCategoria}/>
        }
        {option===2&&<Folders setCategoria={setCategoria} setListado={setListado} setOption={setOption}/>}

      </div>}
        
        
      </div>
      {cancion!==null&&<Player listado={listado} cancion={cancion} setCancion={setCancion} reproduciendo={reproduciendo} setReproduciendo={setReproduciendo} Titulo={titulo} Autor={autor} Categoria={categoria} Duracion={duracion} setTitulo={setTitulo} tituloActual={titulo} setAutor={setAutor} setDuracion={setDuracion} setCategoria={setCategoria} repetir={repetir} setRepetir={setRepetir}/>}
    </div>
  )
}/*
          QUINTO COMPONENTE <br/>
          Si está reproduciendo, aparece un disco que gira, los colores dependen de la carpeta <br/>
          Botón para atrás para volver al segundo o tercer Componente <br/>*/