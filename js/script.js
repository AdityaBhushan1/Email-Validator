let key = "ema_live_dAyrFbjNQpYtFnkcy3aD6uG3H8zt2PyqU1VRM5bE"

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    resultCont.innerHTML = `<img width = "123" src="/img/loading.svg" alt="loading">`
    let email = document.getElementById("email").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()

    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " "){
            str = str + `<div><b>${key}</b> : ${result[key]}</div>`
        }
    }

    resultCont.innerHTML = str

})


