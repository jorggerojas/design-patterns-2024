import{ 
    generate
} from 'random-words'
const words=generate(20)

   for(let i=0; i<words.length;i++){
        if(words[i].charAt(0)==="a"){
            words[i]="YES"
        }
    }

console.log(words)