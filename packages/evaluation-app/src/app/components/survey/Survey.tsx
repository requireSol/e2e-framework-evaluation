"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";
import json from "./survey.json";
import { useCallback, useState } from "react";
import { api } from "@evaluation-app/trpc/react";

export default function SurveyComponent() {
  const survey = new Model(json);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const submitResponse = api.survey.submitResponse.useMutation({
    onSuccess: () => {
      console.log("Survey response submitted successfully!");
      setSubmissionStatus('success');
    },
    onError: (error) => {
      console.error("Error submitting survey response:", error);
      setSubmissionStatus('error');
    }
  });
  const surveyComplete = useCallback((survey: Model) => {
    try {
      setSubmissionStatus('submitting');
      submitResponse.mutate({
        responseData: survey.data as Record<string, string[]>
      });
    } catch (error) {
      console.error("Error in surveyComplete:", error);
      setSubmissionStatus('error');
    }
  }, [submitResponse]);

  survey.onComplete.add(surveyComplete);

  return (
    <div className="survey-container">
      {submissionStatus === 'success' && (
        <div className="mb-4 rounded bg-green-100 p-4 text-green-800">
          Vielen Dank für Ihre Teilnahme! Ihre Antworten wurden erfolgreich gespeichert.
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="mb-4 rounded bg-red-100 p-4 text-red-800">
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
        </div>
      )}

      {submissionStatus === 'submitting' && (
        <div className="mb-4 rounded bg-blue-100 p-4 text-blue-800">
          Ihre Antworten werden übermittelt...
        </div>
      )}
      {submissionStatus === 'idle' && (
      <Survey model={survey} />
      )}
    </div>
  );
}
