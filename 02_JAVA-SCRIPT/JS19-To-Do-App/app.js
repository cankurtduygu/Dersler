{/* <li class="ayse">
  <i class="fa fa-check fa-lg"></i>
  <p></p>
  <i class="fa fa-trash fa-lg"></i>
</li>; */}


//*Elementleri getirme

let completed = 0;
let total = 0;

const totalSpan = document.querySelector('#toplam');

const completedSpan = document.querySelector('#tamamlanan')

const todoInput = document.querySelector('#todo-input');
// console.log(todoInput);

const todoButton = document.querySelector('#todo-button');
// console.log(todoButton);


const todoSection = document.querySelector('.todos');
// console.log(todoSection);

const todoUl = document.querySelector('#todo-ul');
// console.log(todoUl);

todoButton.addEventListener('click', function(){

  let todoInputVal = todoInput.value;
  if(todoInputVal==="") return;

  todoUl.innerHTML += 
    `<li class="ayse"><i class="fa fa-check fa-lg"></i><p>${todoInputVal}</p> <i class="fa fa-edit fa-lg"></i><i class="fa fa-trash fa-lg"></i></li>`
    console.log(todoUl);
    total++;
    totalSpan.textContent = total;

//* input degerini sifirladik
  todoInputVal = "";
  todoInput.value ="";
    
})

//* enter ile deger girisi
todoInput.onkeydown=(tus) =>{
    if(tus.keyCode==13)
        todoButton.click()
}


todoUl.addEventListener('click',function(ev){
  console.log(document.querySelector('.fa-check').classList);
  
    if(ev.target.classList.contains('fa-check')){
      ev.target.parentElement.classList.add('checked');
      completed++;
      completedSpan.textContent = completed;
      return;
    }
     console.log(document.querySelector('.fa-check').classList);
    
    if(ev.target.classList.contains('fa-trash')){
      if(ev.target.parentElement.classList.contains('checked'))
      {
        completed--;
        completedSpan.textContent=completed;
        // return;
      }
      ev.target.parentElement.remove();
      

      total--;
      totalSpan.textContent=total;
      
      return;
    }


    if(ev.target.classList.contains('fa-edit')){
      // Edit ikonuna tıklanınca, aynı <li> içindeki <p> elementini bul
      const metinP = ev.target.parentElement.querySelector('p');
      // Burada metinP ile düzenleme işlemlerini yapabilirsin
      console.log(metinP);
      
    }
  })
