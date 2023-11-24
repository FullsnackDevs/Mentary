import "../styles/bot.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const q = query(collection(db, "API_KEY"));
const querySnapshot = await getDocs(q);

export const OPENAI_TOKEN = querySnapshot.docs[0].data().KEY;
const WIT_AI_TOKEN = querySnapshot.docs[1].data().KEY;

const url =
  "https://api.wit.ai/event?v=20231118&session_id=prodbl&context_map=%7B%7D"; // AI's response

export const expressEmotion = async (blogText) => {
  if (blogText === "" || blogText === null) {
    console.log("No input");
    return;
  }

  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WIT_AI_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "message",
      message: blogText,
    }),
  })
    .then(async (res) => await res.json())
    .then(async (data) => {
      console.log(await data);
      const currentExpress = await data.response.text;
      const botSection = document.querySelector("#bot-response");
      botSection.innerHTML = currentExpress;
      console.log(currentExpress);
    });
};

export function Bot() {
  return (
    <div className="bot-section">
      <p className="bot-section__title">Your expression</p>
      <p id="bot-response"></p>
    </div>
  );
}
