const containerElement = document.getElementById("container");
const adviceElement = document.getElementById("advice");
const authorElement = document.getElementById("author");
const twitterElement = document.getElementById("twitter");
const newAdviceElement = document.getElementById("new-advice");

const getAdvice = async () => {
  const adviceApiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(adviceApiUrl);
    const data = await response.json();
    const advice = data.slip.advice;
    adviceElement.innerText = advice;
    if (advice.length > 125) {
      adviceElement.classList.add("long-advice");
    } else {
      adviceElement.classList.remove("long-advice");
    }
  } catch (error) {
    console.log("Something went wrong. Error: ", error);
  }
};

const getAuthor = async () => {
  const authorApiUrl = "https://randomuser.me/api";
  try {
    const response = await fetch(authorApiUrl);
    const data = await response.json();
    const author = data.results[0].name.first;
    authorElement.innerText = author;
  } catch (error) {
    console.log("Something went wrong. Error: ", error);
  }
};

getAdvice();
getAuthor();
