import React from "react";
//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?
//?==================================================================

//* Lifecycle yöntemleri, DOM'daki süreleri boyunca componentler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* componentin ölümü (DOM ağacından kaldırılıyor) (componentWillUnmount)

class LifeCycleMethods extends React.Component {
    //! 1-componentin oluşmasında çağırılır
  constructor(props) {
    console.log("constructor oluşturuldu");
    
    super(props);
    this.state = {
      count: props.count || 0,
    };
  }

  arttir = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //! 3-) component  monte edildiğinde çağrılır
  //! (ilk renderdan hemen sonra).(database den veri çekme vs...)
  //!  lifecycle döngüsünde yalnızca bir kez çağrılır

  componentDidMount() {
    console.log("component kuruldu");
  }

  //! 4-) bileşen güncellenir ve yeniden oluşturulur hemen sonrasında çağrılır.

  //!ayrıca yeni değiştirilen duruma veya props lara  bir kez erişebilir

  componentDidUpdate() {
    console.log("component update edildi");
  }

  //! 5- bileşen DOM dan kaldırılmadan önce çağırılır

  componentWillUnmount() {
    console.log("component öldü");
  }

  //!2- her oluşturmada çağırılır (bileşeni DOM a çizme)
  render() {
    console.log("component render edildi");
    
    return (
      <div className="container p-3">
        <h1>LIFE CYCLE METHODS</h1>
        <h3>COUNT: {this.state.count} </h3>
        <button onClick={this.arttir} className="btn btn-info">
          ARTTIR
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods;