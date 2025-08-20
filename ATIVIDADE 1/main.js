const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListenner("submit", (e) => {
    constnome = frm.inNome.value
    resp.innetText = `Olá, ${nome}`
    e.preventDefault()
})