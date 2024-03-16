import{ 
    generate
} from 'random-words'
const words=generate(20)
const filtered=words.filter((word)=>{
    return word.length>=6
})
console.log(filtered)