import React from "react";
import { Button } from "./FeedbackOptions.styled";
const FeedbackOptions = ({onLeaveFeedback, options}) => (
   <>
{options.map((option) => (
<Button key={option} type="button" onClick={() => onLeaveFeedback(`${option}`)}>{option}
</Button> ))}
   </>
);

export default FeedbackOptions;