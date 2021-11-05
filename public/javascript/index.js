
function onOFF(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")   
}

function checkFields(event){
    const valueToCheck = [
        "title",
        "image",
        "category",
        "descripition",
        "link"
    ]
    const isEmpity = valueToCheck.find(function(value){
        if(typeof event.target[value].value === "string" && !event.target[value].value.trim()){
            return true
        }
    })

    if(isEmpity){
        event.preventDefault()
        alert("Por favor preencha todos os campos")
    }
}