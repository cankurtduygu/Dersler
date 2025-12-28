class Book {
    //!private degisken tanimlayalim

    #komisyon;

    //!static degisken tanimlanmasi

    static counter = 0;

    constructor(title,yazar,year){
        this.title = title;
        this.author = yazar;
        this.year = year;

        this.#komisyon=500;

        this.ozetFunction=function(){
            return "kitap okumak iyidir"
        };

        Book.counter++;
        Book.komisyon=50;
    }  
    
    
}

const book1 = new Book("nutuk", "Atatürk", 1930);
console.log(book1);
