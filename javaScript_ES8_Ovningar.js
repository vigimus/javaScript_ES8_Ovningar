// Lös nedanstående problem:

// #1) rada upp sköldpaddan och kaninen på start linjen:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Det ska se ut så här:
'     ||<- Start line'
'       🐢'
'       🐇'

// När du gör:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(10);
rabbit = rabbit.padStart(10);


// #2) Vad händer om du kör kommandot turtle.trim().padEnd(9, '=') på variabeln turtle
turtle = turtle.trim().padEnd(9, '=');

//Svaret kommer bli "🐢======="
//Bilder går inte att trimma

// #3) Få ovan objekt att:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Göra det här:
//'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join('') 







































