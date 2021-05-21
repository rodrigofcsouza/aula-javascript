var name = "Rodrigo Fernandes";
lista = ["maça", "pera", "uva"]

alert("Seja bem-vindo: "+name);
console.log(name);
console.log(name + " " + "Lindo")
console.log(lista);
console.log(lista[2]);
console.log(lista.toString());
console.log(lista.join(" | "));
console.log(lista.push("melancia"));
console.log(lista);
console.log(lista.reverse());
console.log(lista.length);


var cont = 0;
var idade = prompt("Qual a sua idade");

if (idade < 18) {
    alert("Menor de idade");
}
else {
    alert("Maior de idade");
};
console.log("While")
while (cont <= 5) {
    console.log(cont);
    cont ++;
};
console.log("For");
for(count=0;count <= 5; count++){
    console.log(count);
}