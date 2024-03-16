import{ 
    generate
} from 'random-words'
const words=generate(20)
for(let i=0;i<words.length;i++){
    if(words[i].length>6){
        words[i]="NO"
    }
}
console.log(words)