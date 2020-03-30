function onOff(){
    document
        .querySelector("#modal") // vai selecionar o q tem esse id
        .classList //vai ler tudo q esta escrito
        .toggle("hide") //vai esconder oq foi lido


    document
        .querySelector("body") 
        .classList 
        .toggle("hideScroll") 

    document
    .querySelector('#modal')
    .classList
    .toggle("addScroll")
}

function checkFields(event) {
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]


    const isEmpty = valuesToCheck.find(function(value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if (checkIfIsString && checkIfIsEmpty) {
            return true
        }

    })

    if (isEmpty) {
        event.preventDefault()
        alert("Por favor faz direito mano")
    }


    // for (let value of valuesToCheck){
    //     event.target[value].value
    // }

}