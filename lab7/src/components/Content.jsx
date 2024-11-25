import React from 'react';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hobbi: ["Колекціонування марок", "Комп'ютерні ігри", "3Д моделювання", "Плавання"],
            films: ["\"Володар перснів\"", "\"Карти, гроші і 2 стволи\"", "\"Великий куш\"", "\"Кримінальне чтиво\""]
        }
    }
    changeColor(e) {
        e.target.classList.toggle("list-title-active");
    }

    render() {
        return (
            <div>
                <h4 className="list-title" onClick={this.changeColor}>Хобі:</h4>
                <ul>
                    {this.state.hobbi.map((item) => <li>{item}</li>)}
                </ul>
                <h4>Улюблені фільми:</h4>
                <ol>
                    {this.state.films.map((item) => <li>{item}</li>)}
                </ol>
                <p>
                    Ніаполь — це колоритне італійське місто, відоме своєю багатою
                    історією, архітектурою, культурою та смачною піцою. Це місто з
                    вулканом Везувій на горизонті і поруч з руїнами Помпеїв.
                </p>
            </div>
        )
    }
}

export default Content;