function generateNumber() {
    
    const minNumber = Math.ceil(document.querySelector(".input-min").value)
    const maxNumber = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    alert(result)
}