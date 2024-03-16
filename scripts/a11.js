import{ 
    generate
} from 'random-words'
const words=generate(50);
const words2=[];
for(let i=0; i<words.length;i++){
    words2.push(words[i])
    words2.push(words[i].toUpperCase())
}
 console.log(words2)
