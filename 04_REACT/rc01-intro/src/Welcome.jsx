function Welcome() {
    //js kodlarimizi buraya yazabiliriz( fonsiyon suslusunden baslar return de biter)
    const name = 'CH11';

    return (
        <div>
            <h2> Merhaba {name} </h2>
            {/*<p>bu ilk react dersimiz</p>*/}
            <WelcomeDescription />
        </div>
    )
}

export default Welcome;//Bir sayfada sadece bir kere export default kullanabilirsin

//* bir dosya icerisinde birden fazla component olusturabilirsin cunku component dedigimiz olay fonksiyondan ibaret

function WelcomeDescription(params) {

    return(
        <p>Bu ilk react dersimiz</p>
    )
    
}