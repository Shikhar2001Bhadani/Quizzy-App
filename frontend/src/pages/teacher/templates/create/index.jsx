import React from "react";
import { useHeading } from "../../../../hooks";
import TemplatesBasicDetailsForm from "../../../../components/Teacher/Templates/Create/BasicDetailsForm";
import AddQuestionType from "../../../../components/Teacher/Templates/Create/AddQuestionType";
import QuestionTypes from "../../../../components/Teacher/Templates/QuestionTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetTemplateState } from "../../../../store/features/template/templateSlice";
import { useParams } from "react-router-dom";
import { useGetTemplateQuery } from "../../../../store/features/template/api";
import CreateTemplateButton from "../../../../components/Teacher/Templates/Create/CreateTemplateButton";

function CreateTemplatePage() {
  const { id } = useParams();
  const { isLoading } = useGetTemplateQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });
  const { setHeading, setSubheading } = useHeading();
  const dispatch = useDispatch();
  setHeading("Create Template");
  setSubheading("This will help you create multiple assesments");

  useEffect(() => {
    return () => {
      dispatch(resetTemplateState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TemplatesBasicDetailsForm />
      <hr className="my-4" />

      <QuestionTypes />

      <AddQuestionType />

      <CreateTemplateButton />
    </div>
  );
}

export default CreateTemplatePage;
