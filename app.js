//define UI
const form = document.querySelector('.book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const table = document.querySelector('.table');


//define row
let row = 1;

//display details event listener
form.addEventListener('submit', displaydetails);
function displaydetails(e){
  e.preventDefault();
  if(!titleInput.value || !authorInput.value || !isbnInput.value){
    alert('All Field can not be empty')
    return;
  }else{
    const newRow = table.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);


    cell1.appendChild(document.createTextNode(titleInput.value));

    cell2.appendChild(document.createTextNode(authorInput.value));

    cell3.appendChild(document.createTextNode(isbnInput.value));

    cell4.innerHTML = '<a href="#" class="btn btn-danger btn-sm delete">x</a>'

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    row++;
  }

}

//delete book
table.addEventListener('click', (e) =>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }
});

