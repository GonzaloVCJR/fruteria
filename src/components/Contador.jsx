import React from "react";

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valor: props.valorInicial,
        }
    }

    incrementar = ()=>{
        this.setState((prevState)=> ({valor: prevState.valor + 1,}));
    };

    decrementar = ()=>{
        this.setState((prevState) => ({ valor : prevState.valor - 1,}))
    }

    render(){
        return (
            <div>
                <p>Valor: {this.state.valor}</p>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
            </div>
        )
    }
}

export default Contador 