namespace HaushaltshilfeA5 {
    window.addEventListener("load", writeHTML);

    async function writeHTML(): Promise<void> {
        
        let response: Response = await fetch("Data.json");
        let content: string = await response.text();
        let data: Data = JSON.parse(content);
        let form: HTMLDivElement = <HTMLDivElement> document.querySelector("#form");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
        form.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);
    
        document.querySelector("#resetbutton")?.addEventListener("click", clearOrder);
        generateContent(data);

    }

 
    //Veränderungen darstellen
    function handleChange(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement> document.querySelector("#order");
        order.innerHTML = "";

        let data: FormData = new FormData(document.forms[0]);
        let total: number = 0;

        for (let entry of data) {
            if (entry[0] == "Artikel") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("preis"));
                let amount: number = Number (data.get(entry[1] + "Menge"));
                let einheit: string = <string> (item.getAttribute("einheit"));
                
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }

            if (entry[0] == "Finanzen") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let betrag: number = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " +  betrag + " €" + " <br>" + " Gebühr: 10€ <br> <br>";
                total += 5;
            }

            if (entry[0] == "Hausarbeiten") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("preis")); 
                total += price;
                order.innerHTML += item.value + ": " + price + " €" + "<br> <br>";
            }

            if (entry[0] == "Zahlung") {
                let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += "--------------------------------- <br> Zahlungsrt: " + item.value + "<br> <br>";
            }

        }
        let supermarkt: string = <string> data.get("Supermarkt");
        order.innerHTML += "Präferierter Supermarkt:  " + supermarkt + "<br>" + "______________________ <br>" + "Total: " + total + "€";

    }

}

// Löscht die gesamte Bestellung
function clearOrder(): void {
    let order: HTMLDivElement = <HTMLDivElement> document.querySelector("#order");
    order.innerHTML = "";  
}

                //Bestellung abschicken und Erfolgsmeldung anzeigen
async function sendOrder(): Promise<void> {
                let formData: FormData = new FormData(document.forms[0]);
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                await fetch("index.html?" + query.toString());
                alert("Deine Bestellung ist bei uns eingegangen!");
}