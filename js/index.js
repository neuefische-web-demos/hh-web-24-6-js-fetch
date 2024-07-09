// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";
console.clear();
// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function renderJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = "";

  // Create a new joke DOM element and append it to joke section
  const newJoke = Joke(joke);

  jokeSection.append(newJoke);
}

async function fetcher(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

console.log("GLOBAL: A");
fetchJoke();
console.log("GLOBAL: B");

async function fetchJoke() {
  console.log("FETCHER: A");
  const data = await fetcher(
    "https://example-apis.vercel.app/api/bad-jokes/random"
  );
  console.log("FETCHER: B");
  renderJoke(data.joke);
}
