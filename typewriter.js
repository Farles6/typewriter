const sentence = "hello there from lighthouse labs\n";
let timer = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, (timer += 50));
}
