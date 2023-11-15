import emojiList from "./emojiList";

const emojiMap = {};

emojiList.forEach((emojiListObject) => {
  emojiMap[emojiListObject.name] = emojiListObject;
});

export default emojiMap;
