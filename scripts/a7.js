import{ 
    generate
} from 'random-words'
const words=generate(20)
words.sort()
console.log(words)