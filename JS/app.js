//Episode1: Donne moi ton adresse mail
//ce programme nous permettra de vérifier si l'adresse mail saisie par un utilisateur est correcte

//debut du programme
let adresseMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
//cette première ligne de code nous pemettra de savoir si l'utilisateur a entré une adresse mail valide.

const utilisateurEmail = prompt("Entrez votre adresse mail afin qu'elle soit vérifiée:");

//maintenant à l'aide des lignes ci-dessous nous pourrons vérifier si notre programme fonctionne.
if(adresseMail.test(utilisateurEmail)===true){
	alert("Cette adresse mail est valide");
} else {
	alert("Cette adresse mail est invalide");
}
//fin du programme






//Episode2:Mot de Passe
//Ce programme nous permettra de savoir si le mot de passe entré par l'utilisateur respecte certains critères ou pas qui seront précisés plus bas.
let passWord = /[A-Z]{1}[0-9a-z]{1,8}/;

const utilisateurMotDP = prompt("Veuillez entrer un mot de passe qui contient au moins: 8 caractères minimum; contient une majuscule; contient au moins un chiffre");

//comme pour le précédent programme après que l'utilisateur ai entré son mot de passe il est vérifié par le programme.
console.log(passWord.test(utilisateurMotDP));//renvoie true ou false en fonction de la validité du mot de passe.
//fin du programme






//Episode3:Au pluriel
//Ce programme vous demandera votre nombre d'enfants et en fonction de ce dernier le mot enfant sera soit au pluriel soit au singulier.

//Début du programme
let nom = prompt("Entrez votre nom");
let nombreDenfant = Number(prompt("Entrez votre nombre d'enfant:"));

//juste en dessous vous pouvez voir l'ensemble des conditions qui changeront le nombre du mot enfant.
if (nombreDenfant===1) {
	alert(`${nom} vous avez 1 enfant`);
} else if (nombreDenfant>1) {
	alert(`${nom} vous avez ${nombreDenfant} enfants`);
} else if (nombreDenfant===0) {
	alert(`${nom} vous n'avez pas enfants`);
}
//Fin du programme






//Episode4:Dis-moi, Quand est tu né ?
//Ce programme demandera vorte date de naissance et vérifiera si vous l'avez écrite au format JJ/MM/AAAA donc respectivement Jour, Mois, Année.

//Début programme
let jour = Number(prompt("Entrez votre jour de naissance:"));
let mois = Number(prompt("Entrez votre mois de naissance:"));
let annee = Number(prompt("Entrez votre année de naissance:"));

//Et maintenant l'ensemble de conditions qui permettrons de vérifier que les dates entrées respectent le format JJ/MM/AAAA.
if (((jour>0)&&(jour<=31))&&((mois>0)&&(mois<=12))&&((annee>0)&&(annee<=2020))) {
	alert("Cette date respecte le format JJ/MM/AAAA");
} else {
	alert("Cette date ne respecte pas le format JJ/MM/AAAA");
}
console.log("Fin du programme");
//Fin du programme







//Episode5:Fiche de renseignement
/*Ce programme après voir récupéré vos données vous modélisera sous forme
d'un objet informatique affiché dans la console (un objet est une donnée informatique possédant plusieurs caractéristiques).*/

//Début du programme
//je crée d'abord un objet un objet vide auquel sera ajouté plusieurs propriétés au fil du programme.
const individu = {}
//Maintenant le programme demande des informations qui seront les différentes propriétés de l'objet individu.
individu.nom = prompt("Entrez votre nom");
individu.prenom = prompt("Entrez votre prenom");
individu.sexe= prompt("Entrez votre sexe");
//Comme demandé dans l'énoncé une condition qui permettra au programme de savoir si l'individu est un homme ou une Femme.
if (individu.sexe==="masculin") {
	individu.titre = "M"
} else if (individu.sexe==="feminin") {
	individu.titre = "Mme"
} else {
	individu.sexe= "";
	console.log("vous avez surement mal renseigné votre sexe")
}
//Maintenant le programme affiche l'objet dans la console pour voir si tout est Okay.
console.log(individu);
//Fin du programme







//Episode6: Quel jour sommes-nous ?
//ce programme vous donnera le jour que nous sommes en fonction du chiffre que vous donnerez de 1 à 7 pour les 7 jours de la semaine.

//debut du programme
let chiffreDuJour = Number(prompt("Entrez un chifffre de 1 à 7 et le jour correspondant s'affichera"));

//je stocke les différents jours dans un tableau
const jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]

switch (chiffreDuJour) {
	case 1:
		alert(jours[0]);
		break;
	case 2:
		alert(jours[1]);
		break;
	case 3:
		alert(jours[2]);
		break;
	case 4:
		alert(jours[3]);
		break;
	case 5:
		alert(jours[4]);
		break;
	case 6:
		alert(jours[5]);
		break;
	case 7:
		alert(jours[6]);
		break;
	default:
		alert("votre chiffre doit être compris entre 1 et 7");
}
//fin du programme







//Episode7: Admis ou recallé
//Ce programme vous demandera de donner vos notes afin de donner votre moyenne et de vous dire si vous êtes recallés ou admis.

//Début du programme
//je crée un tableau vide qui permettra de stocker les différentes notes
const notes = [];
let action = prompt("Ajouter une note ?")

//le tableau sera rempli avec les données que vous donnez ici.
//tant que la variable action sera égale a oui vous pourrez ajouter une nouvelle note
while (action===oui) {
	notes.push(prompt("Entrez une note sur 20"));
	let action = prompt("Ajouter une note ?")
}
+

//fin du programme






//Episode8:






//Episode9:A table !
//ce programme permettra de donner la table de multiplication que l'utilisateur veut.
function tableMultiplication(nombrechoisi){
	for (i=0;i<=10;i++){
		console.log(`${nombrechoisi} X ${i} = ${nombrechoisi*i}`);
	}//on crée une boucle qui permettra d'afficher la table de multiplication du nombre choisi.
}
//début du programme
const nombrechoisi = prompt("Entrez un nombre afin de voir sa table de multiplication");
console.log(tableMultiplication(nombrechoisi));
//fin du programme


//Episode10:Pair ou impair ?
//ce programme nous permettra de savoir si un nombre est pair ou non.
//D'abord on crée une Regex pour filtrer les lettres et les symboles pour n'autoriser que les caractères numériques
let filtreaLettre = /[^\d]/;
//puis on crée une regex chargée de reconnaitre un nombre pair ou impair
let filtreaNombre = /[02468]$/;
//maintenant on crée la fonction qui s'occupera de toutes les vérifications avant de donner le resultat.
function verificationNombre(nombrechoisi){
	if (filtreaLettre.test(nombrechoisi)===true) {
		alert("Les lettres ne sont pas autorisées");
	} else if(filtreaNombre.test(nombrechoisi)===false) {
		console.log("Ce nombre n'est pas pair");
	} else if(filtreaNombre.test(nombrechoisi)===true){
		console.log("Ce nombre est pair");
	}
}

const nombrechoisi = Number(prompt("Entrez un nombre afin de savoir si il est pair"));
console.log(verificationNombre(nombrechoisi));
//fin du programme





//Episode11:Le BOSS
//Ici l'objectif est de faire des programmes écrits plus haut des fonctions.

//fonction de l'Episode1:Adresse mail.
function valideEmail(adresseMail){
	let valideAdresseMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(valideAdresseMail.test(adresseMail)===true){
	alert("Cette adresse mail est valide");
	} else {
	alert("Cette adresse mail est invalide");
	}
}
//fonction de l'Episode2:Mot De Passe.
function validePassword(passWord){
	let regpassword = /[A-Z]{1}[0-9a-z]{1,8}/;
	if (regpassword.test(passWord)===true){
		alert("Votre mot de passe est valide");
	}else {
		alert("Votre mot de passe est invalide");
	}

}
//fonction de l'Episode4:Date de naissance.
function valideDate(jour,mois,annee){
	if (((jour>0)&&(jour<=31))&&((mois>0)&&(mois<=12))&&((annee>0)&&(annee<=2020))) {
	alert("Cette date respecte le format JJ/MM/AAAA");
} else {
	alert("Cette date ne respecte pas le format JJ/MM/AAAA");
}
console.log("Fin du programme");
}
//fonction de l'Episode6:Quel jour sommes nous
function donneJour(chiffre){
	const jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]

switch (chiffre) {
	case 1:
		alert(jours[0]);
		break;
	case 2:
		alert(jours[1]);
		break;
	case 3:
		alert(jours[2]);
		break;
	case 4:
		alert(jours[3]);
		break;
	case 5:
		alert(jours[4]);
		break;
	case 6:
		alert(jours[5]);
		break;
	case 7:
		alert(jours[6]);
		break;
	default:
		alert("votre chiffre doit être compris entre 1 et 7");
	}
}