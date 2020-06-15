import React, {useState} from 'react'
import Fret from './Fret'
import Backing from './Backing'
import axios from 'axios'
import Titulo from './Titulo'

export default props=>{

    const[srcFret, setSrcFret] = useState('https://fretmap.app/')
    const[backingFret, setBackingFret] = useState('https://www.youtube.com/embed/4q7h2SwIyLg')
    const[titulo, setTitulo] = useState('C Jônio')
    const[tonica, setTonica] = useState('c')
    
    
    axios.get('https://jam-track.herokuapp.com/c-jonio').then((res)=>{

        setSrcFret(res.data.src_fret)
        setBackingFret(res.data.src_backing)
        setTitulo(res.data.titulo)


    })
    return (

        <div>

            <h1 className = 'text-primary text-center'>Jam Track React</h1>
            
            <Titulo titulo = {titulo}/>
            <Fret src = {srcFret}/>
            <Backing src = {backingFret}/>


        </div>
    )
}