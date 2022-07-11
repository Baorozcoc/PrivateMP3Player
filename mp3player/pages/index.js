import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [orden, setOrden]=useState("Antiguo"); //Orden de reproducción
  const [siguiente, setSiguiente]=useState(""); //Nombre siguiente canción
  const [anterior, setAnterior]=useState("");//Nombre anterior canción
  const [listado, setListado]=useState([]); //Listado de canciones
  const [cancion, setCancion]=useState(null); //Canción actual
  const [autor, setAutor]=useState(""); //Autor canción actual
  const [duracion, setDuracion]=useState(0); //Duración canción actual
  const [repetir, setRepetir]=useState("No"); //Repetir canción o lista
  const [categoria, setCategoria]=useState(1); //Categoría canción actual
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
        <button type="button" className="btn btn-outline-primary fw-bolder">Todas las canciones</button>
        <button type="button" className="btn btn-outline-primary fw-bolder">Por Categorias</button>
        <div className='contenedor overflow-auto h-100 p-3'>
          SEGUNDO COMPONENTE<br/>
          [] Orden aleatorio <br/>
          [] Orden por artista <br/>
          [] Orden alfabetico <br/>
          [] Más reciente <br/>
          [] Más antiguo <br/>
          Toda la musica desordenada <br/>
          <br/>
          TERCER COMPONENTE <br/>
          Carpetas de música con color predeterminado <br/>
          --Se hace uso del segundo pero con musica según carpeta<br/>
          CUARTO COMPONENTE <br/>
          Componente reproductor, contiene play/pausa, siguiente, anterior, volumen <br/>
          Linea de duración de la canción <br/>
          [] Repetir canción<br/>
          [] Repetir lista <br/>
          [] No Repetir <br/>
          QUINTO COMPONENTE <br/>
          Si está reproduciendo, aparece un disco que gira, los colores dependen de la carpeta <br/>
          Botón para atrás para volver al segundo o tercer Componente <br/>
          ARCHIVO .JSON <br/>
          Contiene toda la musica ordenada por carpetas, cada canción tiene: 
          Nombre, Autor, Duración (seg), Categoria, Ubicación
          <br/>
          CATEGORIAS:<br/>
          -Romantica: #FFE3A9 AMARILLO #FF8C8C ROSA #FF5D5D ROJO <br/>
          -Salsa: #F77E21 NARANJA #FAC213 AMARILLO #FEF9A7 AMARILLO CLARO <br/>
          -Pop: #576F72 VERDE OSCURO #7D9D9C VERDE MEDIO #E4DCCF BEIGE<br/>
          -RockEng: #774360 MORADO OSCURO #B25068 ROJO #E7AB79 AMARILLO <br/>
          -Electroswing: #06283D #1363DF #47B5FF AZULES <br/>
          -Instrumental: #334257 AZUL OSCURO #476072 GRIS #EEEEEE BLANCO<br/>
          -RockEsp: #DCD7C9 BEIGE #A27B5C CAFÉ #3F4E4F GRIS VERDOSO<br/>
        </div>
      </div>
      
    </div>
  )
}
