import React from "react";
import Markdown from "react-markdown";

function AnswerComponent({ answer = "", showAnswer = true }) {
  if (!showAnswer || !answer) return;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="flex items-center gap-1 font-semibold text-base">
        Answer
      </h3>

      <div className="text-xs flex flex-col gap-2 border bg-green-50 text-green-800 rounded-lg p-4 max-h-[200px] overflow-y-auto">
        <Markdown>{answer}</Markdown>
      </div>
    </div>
  );
}

export default AnswerComponent;
