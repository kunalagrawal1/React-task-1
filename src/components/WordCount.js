import React, { Component } from "react";
function WordCount() {
  const [state, setState] = React.useState({
    wordCount: 0,
    charCount: 0,
  });

  const handleKeyPress = (e) => {
    const count = e.target.value;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };

    setState({
      wordCount: countWords(count),
      charCount: count.length,
    });
  };

  return (
    <div id="container">
      <h1>Responsive Paragraph Word Counter</h1>

      <textarea placeholder="Text Here" onChange={handleKeyPress}></textarea>
      <h1>
        Word Count:
        <span className="num"> {state.wordCount}</span>
      </h1>
    </div>
  );
}

export default WordCount;
