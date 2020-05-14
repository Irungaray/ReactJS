import React from 'react'

class Button extends React.Component {
    state = {
        count: 0
    }

    handleGarompas = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleManzanas = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    resetState = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        const { count } = this.state
        return(
            <div>
                <h1>Garompas: {count}</h1>
                <button type="button" onClick={this.handleGarompas}>
                    METELE UNA GAROMPA
                </button>

                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleManzanas}>
                    METELE UNA MANZANA
                </button>

                <h1>RESETIAR</h1>
                <button type="button" onClick={this.resetState}>
                    RESETIALO NOMA
                </button>
            </div>
        )
    }
}

export default Button