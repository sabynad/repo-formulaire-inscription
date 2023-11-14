console.log("test code ok");


// integre l'element html ul, je crée une variable "liste"
let liste = document.querySelector("ul");
let result;

// récupère données à partir d'une API
let searchUrl ="";
const api = "https://api-adresse.data.gouv.fr/search/?q=";
const datasFetch = async () => {
    const res = await fetch(searchUrl);
    result = await res.json();
    console.log("resultat : ", result); 

    // creer une boucle pour affiche les éléments de l'api dans la liste li créer
   //  génération des Li
    for (let i = 0; i < result.features.length; i++){ 
    let listeLi = document.createElement("li");
      listeLi.classList.add("li-adresse");
      listeLi.innerText = result.features[i].properties.label;  
      liste.appendChild(listeLi);
}
}

let ecrisChamps = "";
// creer une variable de "rue_facturation" pour 
let champs = document.querySelector("#rue_facturation");
let champsVille = document.querySelector("#ville_facturation");
let champsPostal = document.querySelector("#code_facturation");
// ecoute la partie champs lors de l'ecriture 
   champs.addEventListener("input", (text) => {
   ecrisChamps = text.target.value;
   // on remplace les "espaces par un "+" car l'api ne comprend pas les "espaces"
   let ecrisChampSansEspace = ecrisChamps.replace(/ /g, "+");

// si l'écriture composé est supperieur a 5 caractere
//  à ce moment la on récupère les données de l'api pour les affichés
   if (ecrisChamps.length > 5)  {
    console.log(ecrisChamps);
    console.log(ecrisChampSansEspace);
    searchUrl = api + ecrisChampSansEspace;
    liste.innerText = "";
    console.log(searchUrl); 
    
    datasFetch() 
   }
})

// traitement Li
liste.addEventListener("click", (event) => {
   console.log(event.target.innerText);
   let choixAdresse = event.target.innerText;
for (let t = 0; t < result.features.length; t++){
   if (choixAdresse == result.features[t].properties.label){  
   champs.value = result.features[t].properties.name
   champsVille.value = result.features[t].properties.city
   champsPostal.value = result.features[t].properties.postcode
   }   
   
   // traitement ul supprimé la liste une fois choix effectuer
   liste.innerText = "";
}
})







