import{ 
    generate
} from 'random-words'
const words = generate(20)
words.forEach((element)=>console.log(element));