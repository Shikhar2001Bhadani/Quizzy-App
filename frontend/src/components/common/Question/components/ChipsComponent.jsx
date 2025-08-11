import React from "react";
import ChipComponent from "../../ChipComponent";
import { ChipTypes } from "../../ChipComponent/types";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { questionOptions } from "../../../../utils/questionOptions";

function ChipsComponent({ question, index }) {
  const { questions = [] } = useSelector(assesmentsSelector);

  return (
    <div className="flex items-center gap-2 my-2">
      <ChipComponent
        text={`Question ${index + 1} of ${questions.length}`}
        type={ChipTypes.PRIMARY}
      />
      <ChipComponent
        text={`${questionOptions.find((op) => op.id === question.type)?.label}`}
        type={ChipTypes.SECONDARY}
      />
      <ChipComponent text={question.difficultyLevel} type={ChipTypes.PRIMARY} />
    </div>
  );
}

export default ChipsComponent;
