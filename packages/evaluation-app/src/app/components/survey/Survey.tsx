"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";
import json from "./survey.json";
import { useCallback } from "react";

export default function SurveyComponent() {
  const survey = new Model(json);
  const surveyComplete = useCallback((survey: Model) => {
      console.log(survey.data)
  }, []);

  survey.onComplete.add(surveyComplete);
  return <Survey model={survey} />;
}

