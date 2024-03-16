import{ 
    generate
} from 'random-words'
const words=generate(20)
const filtered =words.filter((word)=>{
    return !word.includes('s') && !word.includes('r')
})
console.log(filtered)
