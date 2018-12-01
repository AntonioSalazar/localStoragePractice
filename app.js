var nickName = document.getElementById("nickName");
var useNickName = localStorage.getItem("nickName");


window.onload = function(){
  if (localStorage.getItem("nickName") != null) {
    nickName.innerHTML = useNickName;
  }
}


function registrarUsuario(){
  let userName = document.getElementById("userName").value;
  if( userName != ""){
    // guardando en local storage
    localStorage.setItem("nickName", userName)
    nickName.innerHTML = userName;
  } else{
    alert("Ingresa un nombre valido")
  }
}

function clearLS(){
  nickName.innerHTML = "";
  localStorage.clear();
}