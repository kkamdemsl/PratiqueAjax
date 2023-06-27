function requestListner(){
    console.log("Etat final de la requête ", this) //this c'est l'objet XHR
    let data = JSON.parse(this.responseText)
    let user = data.results[0]
    console.log("L'utilisateur recupéré est : ", user)

    //Extraire les données demandées à partir du user
    let fname = user.name.first
    let lname = user.name.last
    let image = user.picture.large

    /*
    console.log(fname)  
    console.log(lname)
    console.log(image)
    */

   // Creer les éléments HTML dans le DOM
   let li = document.createElement("li")
   let img = document.createElement("img")
   let p = document.createElement("p")

   //Associer du contenu aux éléments créés
   img.src = image
   //p.innerHTML = fname + " "+ lname
   p.innerHTML = `${fname} ${lname}`
   //Attacher tous les éléments HTTML dans le DOM
   document.getElementById("user").appendChild(li)
   li.appendChild(img)
   li.appendChild(p)



}
function gererError(){
    console.log("Il y a erreur, ce n'est pass bon")
}

//Créer des variables pour URL et method HTTP
let url = "https://randomuser.me/api"
let method = "GET"
//Creer une nouvelle instance de l'objet XHR et 
let XHR = new XMLHttpRequest()
//
console.log("Etat initial de la requête ", XHR)
//Ouvrir la connexion
XHR.open(method, url)

//Creer une méthode qui va gérer la réponse
XHR.onload = requestListner

//Creer une méthode qui va gérer les erreurs
XHR.onerror = gererError

//Envoyer la requête
XHR.send()

