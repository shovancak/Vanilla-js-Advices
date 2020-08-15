const getAdvice = async () => {
  const apiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const advice = data.slip.advice;
    console.log(advice);
  } catch (error) {
    console.log("Something went wrong. Error: ", error);
  }
};

getAdvice();
