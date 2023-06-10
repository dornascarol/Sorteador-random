function generateNumber() {
    const minNumber = Math.ceil(document.querySelector(".input-min").value)
    const maxNumber = Math.floor(document.querySelector(".input-max").value)

    if (minNumber >= maxNumber) {
        alert("O valor mínimo tem que ser menor do que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

        alert(result)
    }
}