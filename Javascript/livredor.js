
document.getElementById("quizz").addEventListener("submit", function (envoyer) {
    envoyer.preventDefault();

    var comment = document.getElementById("comment");
    var erreur;

    if (!comment.value) {
        erreur = "Veuillez renseigner un age";
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
        alert(" Merci pour votre commentaire");
    }
});