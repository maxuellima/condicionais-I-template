let booleano1 = true;
let booleano2 = false;
let booleano3 = true
if(booleano1){
    alert("Verdadeiro!")
}else{
    alert("Falso!")
}
if(booleano1 == booleano2){
    alert("Eles são iguais!")
}else if(booleano2 == booleano3){
    alert("Eles são iguais!")
}else if(booleano1 == booleano3){
    alert("Eles são iguais!")
}else{
    alert("Não há nada igual!")
}

//PODER VOTAR OU NÃO

let idade = 14;
if(idade >= 18){
    console.log(`Você pode votar!`)
}
else if((idade>=16 && idade<18) || idade >= 70){
    console.log("Casos facultativos!")
}
else if(idade < 18){
    console.log(`Não pode votar!`)
}

//MÉDIA DO ALUNO
const mediaAluna = (media) => {
if(media >=5 && media <=10 ){
    console.log("Você foi aprovada!")
}
else if(media >=3 && media <5){
    console.log("Recuperação!")
}
else if(media <3){
    console.log(`Você foi reprovada!`)
}else{
    console.log("Dado inválido!")
}
}
mediaAluna(8)