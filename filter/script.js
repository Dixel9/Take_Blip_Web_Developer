function filtraPares(arr) {
    return arr.filter(callBack)
}

function callBack(item) {
    return item % 2 === 0; //se a divisão do item do arrei por 2 não tiver sobra, o número é par
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));