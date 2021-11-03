process.stdout.write('hello from spinner2.js... \rheyyy\n');

let timer = 100;
let animation = ["|", "/", "-", "\\","|"]

for (let x = 0; x < 10; x++) {
  for (let i = 0; i < animation.length -1 ; i++) {
  setTimeout( ()=> {
    process.stdout.write(`\r${animation[i]}` );
  } ,  timer
  
  )
  timer += 200;
}
}