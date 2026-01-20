//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================

import { Component } from "react";

class Counters extends Component {

    constructor(props){
        //!state baslangic degeri tanimlanir
        super(props);

        this.state = {
            sayac: 0,
            baslik: "MERHABA",
            kisi: {isim:"Ayla", yas:25},
        };
    }

    arttir(){
        this.setState({sayac: this.state.sayac + 1});
    }


    render() {
        return (
            <div className="container text-center mt-4">
                <h1>Counters - Class Component</h1>
                <h2>{this.state.baslik}</h2>
                <h3>{this.state.kisi.isim} - {this.state.kisi.yas}</h3>
                <h3>Sayac: {this.state.sayac}</h3>
                <button onClick={this.arttir.bind(this)} className="btn btn-primary">Arttır</button>
                <button onClick={this.azalt.bind(this)} className="btn btn-danger">Azalt</button>
            </div>
        );
    }


}

export default Counters;