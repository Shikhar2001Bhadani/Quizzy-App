import React from "react";
import { useHeading } from "../../../../hooks";
import CustomInput from "../../../../components/common/inputs/CustomInput";
import { InputTypes } from "../../../../components/common/inputs/CustomInput/types";
import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../store/features/assesments/selectors";
import { useDispatch } from "react-redux";
import {
  resetAssesmentsState,
  setAssesmentKey,
} from "../../../../store/features/assesments/assesmentSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetAssesmentQuery } from "../../../../store/features/assesments/api";
import { useGetAllTemplatesQuery } from "../../../../store/features/template/api";
import CreateAssessmentButton from "../../../../components/Teacher/Assessments/CreateAssessmentButton";
import FullQuestionComponent from "../../../../components/common/Question/FullQuestionComponent";

function CreateAssesmentPage() {
  const { id } = useParams();
  const { isLoading } = useGetAssesmentQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });
  const { data: templates = [] } = useGetAllTemplatesQuery();
  const dispatch = useDispatch();
  const { setHeading, setSubheading } = useHeading();
  const { template, title, description, questions } =
    useSelector(assesmentsSelector);

  setHeading("Create Assesment");
  setSubheading("This will help you create multiple assesments");

  const handleChange = (key, value) => {
    dispatch(setAssesmentKey({ key, value }));
  };

  useEffect(() => {
    return () => {
      dispatch(resetAssesmentsState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.DROPDOWN}
          label="Select Template"
          value={template || "Choose from Templates"}
          onChange={(value) => handleChange("template", value)}
          options={templates.map((template) => ({
            ...template,
            id: template._id,
            label: template.title,
          }))}
        />
        <CustomInput
          inputType={InputTypes.TEXT}
          value={title}
          onChange={(value) => handleChange("title", value)}
          label="Assesment Title"
          placeholder="e.g, Math Quiz 1.0"
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          value={description}
          onChange={(value) => handleChange("description", value)}
          label="Assesment Description"
          placeholder="e.g, This is a quiz to test your knowledge of Math"
        />

        <CreateAssessmentButton />

        <div>
          <h1 className="text-3xl font-bold">Generated Questions</h1>
          <div className="flex flex-col gap-4 mt-4">
            {questions.map((question, index) => (
              <FullQuestionComponent
                key={question._id}
                question={question}
                index={index}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAssesmentPage;
