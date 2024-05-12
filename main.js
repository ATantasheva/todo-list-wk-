const btnAdd = document.querySelector('.btn-add'); //добавила в разметку новый класс
const input = document.querySelector('#newItemText');
const itemList = document.getElementById('items');
const searchItem = document.getElementById('filter');

//==================================================================
//Добавление задачи
const list = document.querySelector('.list-group')

//при нажатии на кнопку смотрим есть ли в инпут данные 

btnAdd.addEventListener('click', function (event) {
   let newTask = input.value;
//console.log(newTask);
   event.preventDefault();
   let newBlock = `<li class="list-group-item">
   ${newTask}
   <button
       data-action="delete"
       type="button"
       class="btn btn-light btn-sm float-right"
   >
       Удалить
   </button>
   </li>`
   list.insertAdjacentHTML('afterbegin', newBlock);
   input.value='';
});
//==================================================================
//удаление задачи

// const btnDel = document.querySelectorAll('.btn-sm');
// console.log(btnDel);


// btnDel.forEach(function(el){
//    console.log(el);
//    el.addEventListener('click', removeTask);
// })

// если делаю так то не могу удалить задачи которые создала сама потому что querySelectorAll
//  не живую коллекцию возвращает


// function removeTask(el){
//    console.log(el.target)
//    let delEl=el.target;
//    console.log(delEl.parentElement);
//   delEl.parentElement.remove();
// }
 //  а если делаю живую коллекцию то все равно не могу 
 //удалять вновь созданные задачи

//  const btnDel01 = document.getElementsByClassName('btn-sm');
//  console.log(btnDel01);

//  for(let i=0; i<=btnDel01.length; i++) {
//    btnDel01[i].addEventListener('click', function(e){
//       let delEl01=e.target;
//       console.log(delEl01.parentElement);
//       delEl01.parentElement.remove();
//    })
   
//  }
//=============================================================
//удаление задачи как в уроке 

itemList.addEventListener('click', removeItem);

function removeItem(e){
 //  console.log(e.target);
   if(e.target.hasAttribute('data-action') &&
 e.target.getAttribute('data-action')=='delete') {
  // console.log('есть атрибут');
  if(confirm('Удалить задачу?')) {
   let parentItem = e.target.parentNode.closest('.list-group-item');
   console.log(parentItem);
   parentItem.remove();
  }
  
}
}


//=============================================================
//поиск задачи как в уроке 

searchItem.addEventListener('keyup', filterItem);

function filterItem(e){
let searchText = e.target.value.toLowerCase();
console.log(searchText);

let items = itemList.querySelectorAll('li');

items.forEach(function(item){
   let itemText = item.firstChild.textContent.toLowerCase();
   console.log(itemText);
   if(itemText.indexOf(searchText) != -1){
item.style.display = 'block';
   } else {
      item.style.display = 'none';
   }
})

}

