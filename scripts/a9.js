import{ 
    generate
} from 'random-words'
const words=generate(20)
console.log("arreglo:")
console.log(words)
words.shift()
words.pop()
console.log("arreglo sin primera ni última palabra:")
console.log(words)