document.getElementById("quizz").addEventListener("submit", function (envoyer) {
    envoyer.preventDefault();

    var point = 0;
    var erreur;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var age = document.getElementById("age");
    var choix1 = document.getElementById("choix1");
    var choix2 = document.getElementById("choix2");
    var choix3 = document.getElementById("choix3");
    var choix4 = document.getElementById("choix4");
    var q1 = document.getElementById("vrai1");
    var q2 = document.getElementById("vrai2");
    var q3 = document.getElementById("faux3");
    var q4 = document.getElementById("faux4");
    var q5 = document.getElementById("vrai5");


//Système de point
    //Choix1
    if (choix1.value === "90") {
        point++

    } else {
        point = point + 0;
    }

    //Choix2
    if (choix2.value === "AS Cannes") {
        point++

    } else {
        point = point + 0;
    }

    //Choix3
    if (choix3.value === "déficit") {
        point++

    } else {
        point = point + 0;
    }

    //Choix4
    if (choix4.value === "San Antonio") {
        point++

    } else {
        point = point + 0;
    }


    //Q1
    if (q1.checked) {
        point++
    } else {
        point = point + 0;
    }

    //Q2
    if (q2.checked) {
        point++
    } else {
        point = point + 0;
    }

    //Q3
    if (q3.checked) {
        point++
    } else {
        point = point + 0;
    }

    //Q4
    if (q4.checked) {
        point++
    } else {
        point = point + 0;
    }

    //Q5
    if (q5.checked) {
        point++
    } else {
        point = point + 0;
    }

//Vérification que tous les champs soient saisis

    //Avis
    if (!document.getElementById("tresmauvais").checked && !document.getElementById("mauvais").checked && !document.getElementById("moyen").checked && !document.getElementById("bien").checked && !document.getElementById("tresbien").checked) {
        erreur = "Pouvez-vous nous donner votre avis ?"
    }

    //vrai ou faux
    if (!document.getElementById("vrai5").checked && !document.getElementById("faux5").checked) {
        erreur = "Veuillez choisir entre vrai ou faux";
    }


    if (!document.getElementById("vrai4").checked && !document.getElementById("faux4").checked) {
        erreur = "Veuillez choisir entre vrai ou faux";
    }


    if (!document.getElementById("vrai3").checked && !document.getElementById("faux3").checked) {
        erreur = "Veuillez choisir entre vrai ou faux";
    }


    if (!document.getElementById("vrai2").checked && !document.getElementById("faux2").checked) {
        erreur = "Veuillez choisir entre vrai ou faux";
    }

    if (!document.getElementById("vrai1").checked && !document.getElementById("faux1").checked) {
        erreur = "Veuillez choisir entre vrai ou faux";
    }

    //Question choix multiples
    if (choix4.value === "") {
        erreur = "Veuillez répondre à toutes les questions";
    }

    if (choix3.value === "") {
        erreur = "Il reste des questions sans réponse !";
    }

    if (choix2.value === "") {
        erreur = "Veuillez répondre à toutes les questions";
    }

    if (choix1.value === "") {
        erreur = "Veuillez répondre à toutes les questions";
    }

    if (!age.value) {
        erreur = "Veuillez renseigner un age";
    }
    if (!prenom.value) {
        erreur = "Veuillez renseigner un prenom";
    }
    if (!nom.value) {
        erreur = "Veuillez renseigner un nom";
    }

    //message d'erreur
    if (erreur) {
        envoyer.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;

        setTimeout(function () {
            document.getElementById("erreur").innerHTML = "";
        }, 5000);

        return false;
    } else {
        /*Message de remerciement avec le nombre de bonnes réponses*/
        swal('Quizz envoyé,' + " Merci " + prenom.value + " " + nom.value + " de votre participation !", " Vous avez " + point + " bonnes réponses.");
    }


});

//Réinitialisation du formulaire
function resetForm() {
    document.getElementById("quizz").reset();
    document.getElementById("erreur").innerHTML = "Le formulaire a bien été réinitialiser !";

    setTimeout(function () {
        document.getElementById("erreur").innerHTML = "";
    }, 5000);
}










