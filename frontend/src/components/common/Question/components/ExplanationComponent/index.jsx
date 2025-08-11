import { Sparkle } from "lucide-react";
import React from "react";

function ExplanationComponent({ explanations = [], showExplanation = true }) {
  if (!showExplanation || explanations.length === 0) return;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="flex items-center gap-1 font-semibold text-base">
        <Sparkle size={20} /> Explanation
      </h3>

      <div className="text-xs flex flex-col gap-2 border rounded-lg p-4 max-h-[200px] overflow-y-auto">
        {explanations.map((explanation) => (
          <p key={explanation}>{explanation}</p>
        ))}
      </div>
    </div>
  );
}

export default ExplanationComponent;
