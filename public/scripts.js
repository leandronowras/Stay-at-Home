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
