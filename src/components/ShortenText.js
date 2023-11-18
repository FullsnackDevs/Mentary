// import { Configuration, OpenAIApi } from "openai";
import { OPENAI_TOKEN } from "./Bot.jsx";

const url = "https://api.openai.com/v1/chat/completions";

// const configuration = new Configuration({
//   organization: "org-gzI9jMmihLrH0BZmni80HXrx",
//   apiKey: OPENAI_TOKEN,
// });

// const openai = new OpenAIApi(configuration);

export const shortenText = async (text) => {
  //   console.log(text);
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${text}` }],
      temperature: 0.7,
    }),
  })
    .then(async (res) => await res.json())
    .then(async (data) => {
      console.log(data);
      //   const currentExpress = await data.response.text;
      //   const botSection = document.querySelector("#bot-response");
      //   botSection.innerHTML = currentExpress;
      //   console.log(currentExpress);
    });
};

// const response = await openai.listEngines();
