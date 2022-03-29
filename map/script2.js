function mapSemThis (arr) {
    return arr.map(function(item){
        return item * 2
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums)); //multiplica cada valor do  array separadamente
console.log(nums); //só imprime o valor do array nums