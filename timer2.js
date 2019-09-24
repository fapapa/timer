const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

const main = () => {
  stdin.on('data', (key) => {
    if (key === 'b') {
      process.stdout.write("\x07");
    }
  });

  // for (const item of input) {
  //   let timer = Number(item) * 1000;
  //   if (timer < 0 || isNaN(timer)) {
  //     continue;
  //   }
  //   setTimeout(() => {
  //     console.log(timer);
  //     process.stdout.write('\x07');
  //   }, timer);
  // }
};

main();
