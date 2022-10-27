function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//-------------------------------

/* Element du DOM */

const closeBtn = document.querySelector(".close");
const modalForm = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const modalConfirm = document.querySelector(".modal-confirm");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const form = document.getElementById("reserve");
const submit = document.getElementById("submit");


/* Evenement du DOM */ 

// Évènement pour ouvrir le formulaire.
modalBtn.addEventListener("click", launchModal);

// Évènement pour fermer le formulaire.
closeBtn.addEventListener("click", closeModal);


/* Fonctions */


// Ouvre le formulaire.
function launchModal() {
  modalConfirm.style.display = "none";
  modalForm.style.display = "block";  
};

// Ferme le formulaire.
function closeModal() {
  modalForm.style.display = "none";
};

// Affiche le message de confirmation.
function confirmForm(event) {
  event.preventDefault();
  modalForm.classList.remove("bground");
  modalForm.classList.add("modal-confirm")
  modalConfirm.style.display = "block";

}


// Message d'erreur personnalise avec l'input concerne et un message a afficher.
function errorMessage(element, message) {

  // Creation d'un element paragraphe.
  const newP = document.createElement("p");

  // Ajoute la classe error au nouvel element.
  newP.classList.add("error");

  // Ajoute le message au nouvel element.
  newP.textContent = message;

  // Modifie la couleur d'arrière-plan de l'élément qui reçois l'erreur.
  element.style.background = "indianred";

  // Injecte l'élément <p> précédemment créé à l'élément qui doit afficher l'erreur.
  element.parentNode.insertBefore(newP, element);

}

// Vérifie si le formulaire est valide à la soumission du formulaire.
function validate() {

  // Regex pour le champ nom et prénom.
  const name_regex = /^[A-zÀ-ú]+$/;

  // Regex pour le champ email.
  const mail_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Regex pour la date de naissance
  const date_regex = /^\d{4}-\d{2}-\d{2}$/;

  // Variable pour les champs localisations
  let checked = false;


  // Supprime tous les messages d'erreur déjà present.
  // Utilisation de la fonction Array.prototype.forEach() qui permet d'exécuter une fonction donnée sur chaque élément du tableau.
  document.querySelectorAll(".error").forEach(e => e.remove());
 


  // Vérifie le champ prénom, si le champ ne passe pas le teste de regex ou s'il y a moin de 2 caractères,
  // alors on affiche un message d'erreur, et on empêche la soumission du formulaire.
  if (!name_regex.test(firstName.value) || firstName.value.length < 2) {

    // Appel de la fonction errorMessage, avec en paramètre l'élément du champ prénom et le message a affiché.
    errorMessage(firstName, "Ce champ doit contenir au minimum 2 caractères !");

    // on empêche la soumission du formulaire
    return false;

    // Sinon...
  } else {

    // On change l'arrière-plan du champ correcte.
    firstName.style.background = "green";

  }


  // Pareil que pour le champ prénom, on vérifie le champ nom avec les mêmes conditions.
  // utilisation de la methode JavaScript RegExp test()
  if (!name_regex.test(lastName.value) || lastName.value.length < 2) {

    errorMessage(lastName, "Ce champ doit contenir au minimum 2 caractères !");
    return false;

  } else {

    lastName.style.background = "green";

  }


  // Vérifie le champ email, avec un test pour le regex.
  if (!mail_regex.test(email.value)) {

    errorMessage(email, "Ce champ doit contenir une adresse email valide !");
    return false;

  } else {

    email.style.background = "green";

  }


  // Vérifie la date de naissance, avec un test pour le regex.
  if (!date_regex.test(birthdate.value)) {

    errorMessage(birthdate, "Entrez vôtre date de naissance !");
    return false;

  } else {

    birthdate.style.background = "green";

  }


  // Vérifie que le nombre de tournois est bien une valeur numérique entière.
  // Number.isInteger() permet de déterminer si l'argument est un nombre entier.
  // parseFloat() permet de transformer une chaîne de caractères en un nombre flottant.

  //faire une regex ici
  if (!Number.isInteger(parseFloat(quantity.value)) || quantity.value < 0) {

    errorMessage(quantity, "Ce champ doit être une valeur numérique entier !");
    return false;

  } else {

    quantity.style.background = "green";

  }


  // Vérifie si une localisation est cochée.
  // On boucle sur tous les boutons radio pour les localisations
  for (let i = 0; i < locations.length; i++) {

    // Si une des localisations est cochée
    if (locations[i].checked) {

      // la variable checked devient true
      checked = true;
      break
    }

  }

  // Si la variable checked est false, alors aucune localisation n'est cochée
  if (!checked) {

    errorMessage(document.getElementById("location1"), "Une localisation doit être sélectionner !");
    return false;

  }


  // Vérifie si les conditions d'utilisation sont cochée.
  if (!condition.checked) {

    errorMessage(condition, "Vous devez accepté les conditions d'utilisation !")
    return false;

  }

  /* Si tout est OK */
 
   confirmForm();

}
  




































/*
//-------------------------------
// ISSUE 2
// Implémenter entrées du formulaire

// Une fonction est appeler a la validation du formulaire par l'utilisateur.
// Elle a pour role de verifier a travers des conditions les differents champs du formulaire

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
    // ajouter une regex
  } else if (emailAdressInput.value.indexOf("@") == -1) {
    // permet de tester l'occurence '@' qui renvoi -1 si elle n'est pas trouvee
    e.preventDefault();
    missEmailInput.textContent = "Ceci n'est pas une adresse électronique!";
    missEmailInput.style.color = "red";
    emailAdressInput.focus();
    return false;
  }
 // regex a ce niveau pour verifier la date
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
    //focus et regex (verification du type de donnees (+ digit one or more) )
    return false;
  }
  else if (quantityInput.validity.valueMissing) {
    e.preventDefault();
    missQuantityInput.textContent = "Vous devez entrer un nombre";
    missQuantityInput.style.color = "orange";
    quantityInput.focus();
    return false;
  }

  if(!this.form.terms.checked) // Permet de verifier que le case des conditions d'utilisation a bien ete cochee par l'utilisateur
  {
      alert('Vous devez vérifier que vous acceptez les termes et conditions.');
      return false;
  }

      
  //modalConfirm.style.visibility = "visible";   

  alert("Merci ! Votre réservation a été reçue.");
}
*/



/*
// Recuperer les informations du formulaire :

// JSON.parse(objet) : Transforme un string defini en parametre en objet
// Inscrit le resultat de la fonction en tant qu'objet dans une variable
const local = JSON.parse(localStorage.getItem("user"));

// Creation d'une fonction qui va cree un objet stocker dans une variable user
// lors de la validation du formulaire par le boutton submit
// L'objet contient les informations que l'utilisateur a selectionner dans le formulaire

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
// Ajouter validation ou messages d'erreur (cf issue 2)
//-------------------------------


//-------------------------------
// ISSUE 4
// Ajouter confirmation quand envoi réussi

/*
const closeBtnSubmit = document.querySelector(".btn-submit");
const modalConfirm = document.querySelector(".modal-confirm");
// on cree une fonction qui a pour role de masquer le formulaire en injectant du style
// lors de l evenement click sur l element de classe close
closeBtnSubmit.addEventListener("click", () => {
  
  closeForm.style.visibility = "hidden";
  modalConfirm.style.top = "-640 + px";
  modalConfirm.style.left = "295 + px";
  modalConfirm.style.visibility = "visible";
});
*/
