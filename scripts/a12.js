import{ 
    generate
} from 'random-words'
const words=generate(50);
const found=words.find((word)=> word==="army")
console.log(found)