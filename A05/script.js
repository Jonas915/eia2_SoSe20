"use strict";
var HaushaltshilfeA5;
(function (HaushaltshilfeA5) {
    window.addEventListener("load", writeHTML);
    async function writeHTML() {
        let response = await fetch("Data.json");
        let content = await response.text();
        let data = JSON.parse(content);
        let form = document.querySelector("#form");
        let submit = document.querySelector("#submit");
        form.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);
        document.querySelector("#resetbutton") ? .addEventListener("click", clearOrder) : ;
        HaushaltshilfeA5.generateContent(data);
    }
    //Veränderungen darstellen
    function handleChange(_event) {
        let order = document.querySelector("#order");
        order.innerHTML = "";
        let data = new FormData(document.forms[0]);
        let total = 0;
        for (let entry of data) {
            if (entry[0] == "Artikel") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("preis"));
                let amount = Number(data.get(entry[1] + "Menge"));
                let einheit = (item.getAttribute("einheit"));
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }
            if (entry[0] == "Finanzen") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let betrag = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " + betrag + " €" + " <br>" + " Gebühr: 10€ <br> <br>";
                total += 5;
            }
            if (entry[0] == "Hausarbeiten") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("preis"));
                total += price;
                order.innerHTML += item.value + ": " + price + " €" + "<br> <br>";
            }
            if (entry[0] == "Zahlung") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += "--------------------------------- <br> Zahlungsrt: " + item.value + "<br> <br>";
            }
        }
        let supermarkt = data.get("Supermarkt");
        order.innerHTML += "Präferierter Supermarkt:  " + supermarkt + "<br>" + "______________________ <br>" + "Total: " + total + "€";
    }
})(HaushaltshilfeA5 || (HaushaltshilfeA5 = {}));
// Löscht die gesamte Bestellung
function clearOrder() {
    let order = document.querySelector("#order");
    order.innerHTML = "";
}
//Bestellung abschicken und Erfolgsmeldung anzeigen
async function sendOrder() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    await fetch("index.html?" + query.toString());
    alert("Deine Bestellung ist bei uns eingegangen!");
}
//# sourceMappingURL=script.js.map