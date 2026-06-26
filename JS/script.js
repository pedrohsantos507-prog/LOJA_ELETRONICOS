const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const produto = (document.querySelector("#produto").value);
    const valor = Number(document.querySelector("#valor").value)
    const quantidade = Number (document.querySelector("#quantidade").value);

    const listResultado = () => {
        
    }
})