import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../images/Ideas-removebg-preview(3).png'
import Nosotros1 from './Nosotros1'
import Error1 from './Error1'
import Inicio1 from './Inicio1';

export default class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            backg: false
        }
    }

    handleClick(){
        this.setState({backg: false})
        if(this.state){
            var navBar = document.querySelector('.nav-bar')
            navBar.style.background='#ccc'
        }
    }
    render(){        
        return(
            <>
            <style>
             @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
            </style> 
            
                <Router>
                    <div className="nav-bar">
                        <Link to="/"><img src={logo} alt="logo" className="logo" title="Espacio Chilero" /></Link>
                        <ul className="nav">
                            <li className="lis">
                                <Link className="links links-ltr" to="/">Inicio</Link>
                            </li>
                            <li className="lis">
                                <Link className="links links-ltr" to="/Nosotros">Nosotros</Link>
                            </li >
                            <li className="lis">
                                <Link className="links links-ltr" to="/Contacto">Contacto</Link>
                            </li>
                        </ul>
                    </ div>
                        <Switch>
                            <Route exact path="/">
                                <Inicio />
                            </Route>
                            <Route exact path="/Nosotros">
                                <Nosotros />
                            </Route>
                            <Route exact path="/Contacto">
                                <Contacto />
                            </Route>
                            <Route>
                            <Error />
                            </Route>
                        </Switch>
                    
                </Router>
                </>
            )
        }
}

function Error(){
    return(
        <Error1 />
    )
}

function Inicio(){
    return(
        <Inicio1 />
    )
}

function Nosotros(){
    return(
        <Nosotros1 />
    )
}

function Contacto(){
    return(
        <h1>Contacto</h1>
    )
}