import{ 
    generate
} from 'random-words'
const words=generate(50)
words.unshift("HOLA")
words.push("HOLA")
console.log(words)