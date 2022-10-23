function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//-------------------------------
// ISSUE 5

// TODO : fermer la modale
// on va declarer deux variables qui contiennent respectivement l element de la classe close et content
// close correspond a l element de fermeture du formulaire
// content correspond a l element formulaire

const closeIcon = document.querySelector(".close");
const closeForm = document.querySelector(".content");
// on cree une fonction qui a pour role de masquer le formulaire en injectant du style
// lors de l evenement click sur l element de classe close
closeIcon.addEventListener("click", () => {
  closeForm.style.visibility = "hidden";
});
//-------------------------------

//-------------------------------
// ISSUE 4

// Implémenter entrées du formulaire

// Une fonction est appeler a la validation du formulaire par l'utilisateur.
// Elle a pour role de verifier a travers des conditions
// les differents champs du formulaire

function validate()
{
 if(document.reserve.first.value == "")  {
   alert("Veuillez entrer votre prénom!");
   document.reserve.first.focus();
   return false;
  }
 if(document.reserve.last.value == "") {
   alert("Veuillez entrer votre nom!");
   document.reserve.last.focus();
   return false;
  }
 if(document.reserve.email.value == "") {
   alert("Veuillez entrer votre adresse électronique!");
   document.reserve.email.focus();
   return false;
  }
 if(document.reserve.email.value.indexOf('@') == -1) {
   alert("Ce n'est pas une adresse électronique!");
   document.reserve.email.focus();
   return false;
  }
 if(document.reserve.date.value == "") {
   alert("Veuillez entrer votre date de naissance!");
   document.reserve.date.focus();
   return false;
  }

  var x=document.reserve.quantity.value;
  if (isNaN(x)) 
  {
    alert("Veuillez saisir un chiffre!");
    return false;
  }
  if(document.reserve.quantity.value == "") {
  alert("Veuillez entrer un nombre de tournois!");
  document.reserve.quantity.focus();
  return false;
  }
}
 
 
// Recuperer les informations du formulaire :

// JSON.parse(objet) : Transforme un string defini en parametre en objet
const local = JSON.parse(localStorage.getItem("user") ) 

// Creation d'une fonction qui va cree un objet stocker dans une variable user
// lors de la validation du formulaire par le boutton submit
// L'objet contient les informations de l'utilisateur inscrite a travers le formulaire

btn.onclick = () => {
const user = {
  // stock les informations sous forme de paire ("cle", valeur)
  // le type d'information est un string (chaine de caractere)
  firstname:  first.value, 
  lastname:   last.value,
  email:      email.value,
  birthdate:  birthdate.value,
  tournois:   quantity.value,
  location1:  location1.value,
  location2:  location2.value,
  location3:  location3.value,
  location4:  location4.value,
  location5:  location5.value,
  location6:  location6.value,
}
  // JSON.stringify(objet) : Transforme un objet defini en parametre en string
  localStorage.setItem("user", JSON.stringify(user));
  
}
// Il faut trouver un moyen de stocker la variable dans le local storage a l aide
// de la methode get.Item

//-------------------------------
// ISSUE 3
// Ajouter validation ou messages d'erreur 















//-------------------------------
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


