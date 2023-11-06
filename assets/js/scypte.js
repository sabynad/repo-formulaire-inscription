console.log("test code ok");



const api = "https://api-adresse.data.gouv.fr/search/?q=" ;
const datasFetch = async () => {
    const res = await fetch(api);
    let result = await res.json();
    console.log("resultat : ", result);
    addressList = result;
}

let toto = document.getElementById("rue_facturation")
toto.addEventListener("input", (text) => {
 let champs = text.target.value;
   console.log(champs);
})



