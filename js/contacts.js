/*
Activité : gestion des contacts
*/

//Création du modèle de contact
var Contact = {
	//Initialisation du contact
	init: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},
	//Décrire le contact
	decrire: function () {
		var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
		return description;
	}
};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

//Création du tableau
var contacts = [];

contacts.push(contact1);
contacts.push(contact2);

//Lancement du programme
console.log("Bienvenue dans le gestionnaire de contact");

for (var option = ""; option !== "0";) {
	console.log(" \n1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter\n ");
	option = prompt("Choisissez une option :");

	if (option === "1") {
			console.log(" \nVoici la liste de tous vos contacts");
			contacts.forEach(function (contacts) {
			console.log(contacts.decrire());
		});
	}
		else if (option === "2") {
				var nom = prompt("Entrez le nom du nouveau contact :");
				var prenom = prompt("Entrez le prénom du nouveau contact:");
				var newContact = ("contact" + Number(contacts.length + 1));

				newContact = Object.create(Contact);
				newContact.init(nom, prenom);
				contacts.push(newContact);

				console.log("Le nouveau contact a été ajouté");
		}
};

//Fin du programme
console.log("Au revoir!\n ");
