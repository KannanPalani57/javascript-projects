const jokeFetchBtn = document.getElementById("joke-fetch-btn");
const jokeText = document.getElementById("joke");

jokeFetchBtn.addEventListener("click", async (e) => {
  jokeText.innerHTML = "Loading...";

  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  jokeText.innerHTML = data && data.joke;
});
