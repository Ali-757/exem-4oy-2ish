let list = document.querySelector(".list")
function fun(){
    fetch("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
            "Content-type" : "application/json; charset='UTF-8'"
        }
    }).then(element => element.json()).then(data => product(data))
        function product(params) {
            params.forEach(element => {
                let imageEl = document.createElement("img")
                let textFirstEl = document.createElement("h4")
                let textSeconfEl = document.createElement("p")
                let textThirdEl = document.createElement("p")
                let textFoursEl = document.createElement("p")
                let deletData = document.createElement("h2")
                let div = document.createElement("div")
                div.classList.add("div-box")
                div.style.justifyContent = "center";
                div.appendChild(imageEl)
                imageEl.classList.add("img-el")
                div.appendChild(textFirstEl)
                div.appendChild(textSeconfEl)
                div.appendChild(textThirdEl)
                div.appendChild(textFoursEl)
                div.appendChild(deletData)
                deletData.classList.add("delet-el")
                list.appendChild(div)
                list.style.display = "flex"
                imageEl.src = element.image
                textFirstEl.innerHTML = "Price:" +" " + element.price;
                textSeconfEl.innerHTML = "Discount:" + " " + element.rating["1"];
                textThirdEl.innerHTML = "Des:" + " " + element.description;
                textFoursEl.innerHTML = "Name:" + " " + element.title;
                deletData.textContent = "U"
                console.log(element)

            });
            deletData.addEventListener("click", () => {
                fetch(`https://fakestoreapi.com/products${element.id}`, 
                {
                    method: "delet"
                }
                ).then(res => console.log(res.json()));
            })
        } 
}
fun()

