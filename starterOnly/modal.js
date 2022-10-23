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
let formValidInput =      document.getElementById("btn");
let firstNameInput =      document.getElementById("first");
let missFirstNameInput =  document.getElementById("missFirst");
let lastNameInput =       document.getElementById("last");
let missLastNameInput =   document.getElementById("missLast");
let emailAdressInput =    document.getElementById("email");
let missEmailInput =      document.getElementById("missEmail");
let birthdateInput =      document.getElementById("birthdate");
let missBirthdateInput =  document.getElementById("missBirthdate");
let quantityInput =       document.getElementById("quantity");
let missQuantityInput =   document.getElementById("missQuantity");
let checkboxInput =       document.getElementById('checkbox1');
let missCheckboxInput =   document.getElementById('missCheckbox');

formValidInput.addEventListener("click", validate); // Gestionnaire d'evenement contenant la fonction de validation

function validate(e) {
  if (firstNameInput.validity.valueMissing) {
    // renvoi un boolen true si le champs est vide grace a la propriete ValueMissing
    e.preventDefault(); //L'action du formulaire est bloquée par la fonction preventDefault() et permet d'executer la suite des instructions
    missFirstNameInput.textContent = 'Prénom manquant'; // Injecte le texte defini dans la span avec l'id missFirst
    missFirstNameInput.style.color = 'red'; // Modifie le style du text qui s'affiche par une couleur rouge
    firstNameInput.focus(); // Permet de revenir sur le champs pour inviter l'utilisateur a une nouvelle saisie
    return false; // Retourne la valeur false a la fonction validate du boutton submit du formulaire
  } else if (firstNameInput.value.length < 2) {
    // renvoi un boolen true si le champs contient moins de 2 caracteres
    e.preventDefault();
    missFirstNameInput.textContent =
      'Veuillez entrer 2 caractères ou plus pour le champ du prenom.';
    missFirstNameInput.style.color = "orange";
    firstNameInput.focus();
    return false;
  }

  if (lastNameInput.validity.valueMissing) {
    e.preventDefault();
    missLastNameInput.textContent = "Nom manquant";
    missLastNameInput.style.color = "red";
    lastNameInput.focus();
    return false;
  } else if (lastNameInput.value.length < 2) {
    e.preventDefault();
    missLastNameInput.textContent =
      'Veuillez entrer 2 caractères ou plus pour le champ du nom."';
    missLastNameInput.style.color = "orange";
    lastNameInput.focus();
    return false;
  }

  if (emailAdressInput.validity.valueMissing) {
    e.preventDefault();
    missEmailInput.textContent = "Veuillez entrer votre adresse électronique!";
    missEmailInput.style.color = "red";
    emailAdressInput.focus();
    return false;
  } else if (emailAdressInput.value.indexOf("@") == -1) {
    // permet de tester l'occurence '@' qui renvoi -1 si elle n'est pas trouvee
    e.preventDefault();
    missEmailInput.textContent = "Ceci n'est pas une adresse électronique!";
    missEmailInput.style.color = "red";
    emailAdressInput.focus();
    return false;
  }

  if (birthdateInput.validity.valueMissing) {
    e.preventDefault();
    missBirthdateInput.textContent = "Vous devez entrer votre date de naissance.";
    missBirthdateInput.style.color = "red";
    birthdateInput.focus();
    return false;
  }

  let x = quantityInput.value;
  if (isNaN(x)) {
    e.preventDefault();
    missQuantityInput.textContent = 'Veuillez saisir un chiffre!';
    missBirthdateInput.style.color = 'red';
    return false;
  }
  else if (quantityInput.validity.valueMissing) {
    e.preventDefault();
    missQuantityInput.textContent = "Vous devez entrer un nombre";
    missQuantityInput.style.color = "orange";
    quantityInput.focus();
    return false;
  }

  if(!this.form.terms.checked) // Permet de verifier que le case des conditions d'utilisation a bien ete coche et valider par l'utilisateur
  {
      alert('Vous devez vérifier que vous acceptez les termes et conditions.');
      return false;
  }
}

// Recuperer les informations du formulaire :

// JSON.parse(objet) : Transforme un string defini en parametre en objet
const local = JSON.parse(localStorage.getItem("user"));

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
  };
  // JSON.stringify(objet) : Transforme un objet defini en parametre en string
  localStorage.setItem("user", JSON.stringify(user));
};
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
