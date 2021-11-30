const sentence = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  \n'];

const spinner = () => {
  for (let i = 0; i <= sentence.length; i++) {
    setTimeout(() => {
      if (i === sentence.length) {
        console.log('\n');
      } else {
        process.stdout.write(sentence[i]);
      }
    }, 150 * i);
  }
};

setInterval(spinner, 1000);