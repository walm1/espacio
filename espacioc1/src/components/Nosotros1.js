import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import './Nosotros.css'
import Instagram from '../images/instagram-icon.png'
import Facebook from '../images/facebook-icon.png'
import Footer from './Footer1'

export default class Nosotros extends React.Component{
    render(){
        return(
            <>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
            </style> 
            <h1 className="nosotros1">Nosotros</h1>
            <hr className="hr1" />
            <h1 className="alt-name">
                Espacio Chilero
            </h1>
            <p className="texto1">
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    Where can I get some?

                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                    paragraphs
                    words
                    bytes
                    lists
                    Start with 'Lorem
                    ipsum dolor sit amet...'
	
            </p>
            
            <Router>
            <ul className="nosotros-list">
                <li><Link to="https://www.instagram.com/spacio_chilero.gt/?hl=es-la"
                ><img src={Instagram} className="i-icon" /></Link></li>
                <li><Link to=""
                ><img src={Facebook} className="f-icon" /></Link></li>
            </ul>

            <Router>
                <Switch exact path="https://www.instagram.com/spacio_chilero.gt/?hl=es-la">

                </Switch>
            </Router>
            </Router>

            <Footer className="footer" />
            </>
        )
    }
}