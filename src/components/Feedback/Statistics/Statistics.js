import React from "react";
import { Li, Span} from "./Statistics.styled";
const Statistics = ({good, neutral, bad, total, positiveFeedback} ) => (
    <ul>
    <Li>Good:<Span>{good}</Span>
    </Li> 
    <Li>Neutral:<Span>{neutral}</Span>
    </Li> 
    <Li>Bad:<Span>{bad}</Span>
    </Li> 
    <Li>Total:<Span>{total}</Span>
    </Li> 
    <Li>Positive feedback:<Span>{positiveFeedback} %</Span>
    </Li> 
    </ul>
);

export default Statistics;