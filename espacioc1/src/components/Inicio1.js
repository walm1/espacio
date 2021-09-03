import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Inicio1.css';


const separador0 = {
    img: 'https://lh3.googleusercontent.com/7WywLSCuVAIQJ1KGhzrUQsvHxxn51tWo8R-xF8D9OjKt6h2loogdknwa5v9vgQa0sCVMYZA=s85',
    title: 'separador 1',
    precio: 'Q10',
    alt: 'Separador Shhh'
}

const separador1 = {
    img: 'https://lh3.googleusercontent.com/aWKdBZ8kgM2ltjAEGZATyxBPJkP7HzE0SIAtJkrYIKSwPtsUNXatRswp3Xs51-nbmphAtgU=s85',
    title: 'separador 2',
    precio: 'Q10',
    alt: 'separador abejas'
}

const separador2 = {
    img: 'https://lh3.googleusercontent.com/K-eYXG4Db34zRFP0pbHk4Q_lMnGQV_ySn2XxAWu39AaO7wrQ7Hjux3Z0gFa2Op6M8e-lJoE=s113',
    title: 'separador 3',
    precio: 'Q10',
    alt: 'separador arboles'
}

const separador3 = {
    img: 'https://lh3.googleusercontent.com/iCUmjVKpb4nTU7ErNXH4t2_081zn_JdyyNYevlVcml-8iGP4Gf2Qb88k0ipftFVwv0Bo=s85',
    title: 'separador 4',
    precio: 'Q10',
    alt: 'separador luna'
}

const separador4 = {
    img: 'https://lh3.googleusercontent.com/hYlhAOOKMYwdg3Or0uzYRZc9m1l3Do9YCNqe3nEwGgfuCncuAPM33SF6pvzSH4sYCssRsQ=s85',
    title: 'separador 5',
    precio: 'Q10',
    alt: 'separador de no se mira'
}

const separador5 = {
    img: 'https://lh3.googleusercontent.com/XMVC4CJwZJyrhvKe9kaejdFdEc58qiWYSDf2kq-urMdwnUGMfTPjjtGnPqcrkgEHxsvspA=s85',
    title: 'separador 6',
    precio: 'Q10',
    alt: 'separador de arbol'
}

const separador6 = {
    img: '',
    title: '',
    precio: 'Q10',
    alt: ''
}

const separador7 = {
    img: '',
    title: '',
    precio: 'Q10',
    alt: ''
}

const separador8 = {
    img: '',
    title: '',
    precio: 10,
    alt: ''
}


export default class Inicio extends React.Component{
    render(){
        return(
        <>
        <h1 className="inicio">Inicio</h1>
        <hr className="hr2" />
        <Catalogo />
            <Products img={separador0.img} title={separador0.title} alt={separador0.alt} precio={separador0.precio}/>
            <Products img={separador1.img} title={separador1.title} alt={separador1.alt} precio={separador1.precio}  />
            <Products img={separador2.img} title={separador2.title} alt={separador2.alt} precio={separador2.precio} />
            <Products img={separador3.img} title={separador3.title} alt={separador3.alt} precio={separador3.precio} />
            <Products img={separador4.img} title={separador4.title} alt={separador4.alt} precio={separador4.precio} />
            <Products img={separador5.img} title={separador5.title} alt={separador5.alt} precio={separador5.precio} />
            <Products   />
            <Products />
            <Products />
        </>
    )}
}

const Products = (props) =>{
    return (
        <div className="products">
        <Router>
            <Link to="/products" className="links">
                <div className="product-w">
                    <img src={props.img} alt={props.alt} className="images" />
                    <h3 className="titulo-s" >{props.title}</h3>
                    <h4 className="precio-s">{props.precio}</h4>
                    <h4 className="v-">Ver más</h4>
                </div>
            </Link>

            <Switch>
                <Route exact path="/products">
                    <Product />
                </Route>
            </Switch>
        </Router>
        </div>
    )
}

function Catalogo(){
    return(
        <h2 className="catalogo">Catalogo de productos</h2>
    )
}

function Product(){
    return(
        <h1>producto 1</h1>
    )
}