let formDOM= document.querySelector("#userForm")
formDOM.addEventListener('submit',formHandler)



//kullanıcı inputunu aldık
function formHandler(event){
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("LI").appendChild(li);
    }
    document.getElementById("task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}



// Listeye tıklanınca checkbox ekle
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Listeden  Kapat butonu
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //00D7 x sign
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Listeden  sil
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//görevleri arama
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('task');
  filter = input.value.toUpperCase();
  ul = document.getElementById("LI");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//************************************************************************************** */



// Listeden  sil
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('listingTasks');
  }
}, false);


/*
//kullanıcı inputunu aldık
function formHandler(event){
    event.preventDefault() 
    const inputValue =document.querySelector("#task")
if(inputValue.value){
    addItem(inputValue.value)}
else{
    console.log("1 hatalı giriş")
    alert("Lütfen alanı boş bırakmayınız!!!")}
}

//ekle
let todoListDOM =document.querySelector(`#li`)
const addItem=(task)=>{
let liDOM= document.createElement('li')
var t = document.createTextNode(task);
liDOM.appendChild(t)
todoListDOM.append(liDOM)
localStorage.setItem(`li`,todoListDOM.value)


var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}}
*/
