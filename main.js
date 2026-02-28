import inspirationalQuotes from "./quotes.js";
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quotes = inspirationalQuotes;
const size = quotes.length;

const getRandomQuote = () => {
  let quote = quotes[Math.floor(Math.random() * size)];
  console.log(`\n>>> ${quote}`);
};

function screenOutput(i) {
  switch (String(i)) {
    case '4':
      console.log("==========================\n==============================\n");
      console.log("Welcome, Wise man!\n");
      console.log("Let me give you a beautiful quote!");
      getRandomQuote();
      screenOutput('5');
      break;

    case '5':
      rl.question("\nAnother one?\n1. Yes sir!\n0. That's enough!\nSelection: ", (answer) => {
        screenOutput(answer.trim());
      });
      break;

    case '0':
      console.log("Peace be upon you, Wise man.");
      rl.close(); // Close the interface
      process.exit();
      break;

    case '1':
      getRandomQuote();
      screenOutput('5');
      break;

    default:
      console.log("Invalid choice! Use 1 for a quote or 0 to exit.");
      screenOutput('5');
      break;
  }
}

const main = () => {
  screenOutput('4');
};

main();
