const tarefa = document.querySelector("#tarefa")
const form = document.querySelector("#form")
const resultado = document.querySelector("#resultado")

form.addEventListener("submit", (evento) => {
  evento.preventDefault()

  if (tarefa.value === "") {
    alert("Preencha o campo")
  } else {
    const novo_elemento = document.createElement("li")
    const input = document.createElement("input")
    const span = document.createElement("span")
    const button = document.createElement("button")

    form.appendChild(novo_elemento)
    novo_elemento.appendChild(input)
    novo_elemento.appendChild(span)
    novo_elemento.appendChild(button)

    novo_elemento.className = "card"
    span.className = "span"
    button.className = "button"
    input.type = "checkbox"
    span.textContent = tarefa.value
    button.textContent = "Excluir"
    button.addEventListener("click", () => {
      novo_elemento.remove()
    })

    tarefa.value = ""
    tarefa.focus()
  }
})