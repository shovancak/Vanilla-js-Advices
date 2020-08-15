const getAdvice = async () => {
  const adviceApiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(adviceApiUrl);
    const data = await response.json();
    const advice = data.slip.advice;
    console.log(advice);
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
    console.log(author);
  } catch (error) {
    console.log("Something went wrong. Error: ", error);
  }
};

getAdvice();
getAuthor();
