let num = [6,5,4,3,2,1]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[3]}`)
let pos = num.indexOf(2)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 4 está na posição ${pos}`)
}
