const containerElement = document.getElementById("container");
const adviceElement = document.getElementById("advice");
const authorElement = document.getElementById("author");
const twitterElement = document.getElementById("twitter");
const newAdviceElement = document.getElementById("new-advice");
const loaderElement = document.getElementById("loader");
const textWrapperElement = document.getElementById("text-wrapper");

const loading = () => {
  loaderElement.hidden = false;
  textWrapperElement.hidden = true;
};

const hideLoading = () => {
  loaderElement.hidden = true;
  textWrapperElement.hidden = false;
};

const getAdvice = async () => {
  loading();
  const adviceApiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(adviceApiUrl);
    const data = await response.json();
    const advice = data.slip.advice;
    if (advice.length > 125) {
      adviceElement.classList.add("long-advice");
    } else {
      adviceElement.classList.remove("long-advice");
    }

    adviceElement.innerText = advice;
    hideLoading();
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
    authorElement.innerText = `- ${author}`;
  } catch (error) {
    console.log("Something went wrong. Error: ", error);
  }
};

const tweetAdvice = () => {
  const advice = `"${adviceElement.innerText}"`;
  const author = authorElement.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${advice} - ${author}`;
  window.open(twitterUrl, "_blank");
};

newAdviceElement.addEventListener("click", getAdvice);
newAdviceElement.addEventListener("click", getAuthor);
twitterElement.addEventListener("click", tweetAdvice);

getAdvice();
getAuthor();
