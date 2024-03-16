import{ 
    generate
} from 'random-words'
const words=generate(20)
console.log("orden normal: ")
console.log(words)
const reverse=words.reverse()
console.log("orden en reversa: ")
console.log(reverse)