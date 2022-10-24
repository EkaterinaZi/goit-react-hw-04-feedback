import {useState} from "react"
import Statistics from "components/Feedback/Statistics/Statistics"
import FeedbackOptions from "components/Feedback/FeedbackOptions/FeedbackOptions"
import Notification from "components/Feedback/Notification/Notification"
import Section  from "components/Feedback/Section/Section"


export default function App (){
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const onLeaveFeedback = e => {
  switch (e) {
    case 'good':
      setGood(prevState => prevState + 1);
      return;
    case 'neutral':
      setNeutral(prevState => prevState + 1);
      return;
    case 'bad':
      setBad(prevState => prevState + 1);
      return;
    default:
      return;
  }
};
const options = {good, bad, neutral};
const countTotalFeedback = (good, bad, neutral) =>{
  return  good + bad + neutral
};
const countPositiveFeedbackPercentage = (good, total) => {
  return (Math.ceil((100 * good) / total))
};   
const total = countTotalFeedback(good, neutral, bad)
const positiveFeedback = countPositiveFeedbackPercentage(good, total)

    return (<>
    <Section title="Please leave feedback">
    <FeedbackOptions  options={Object.keys(options)} onLeaveFeedback={onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
    {total === 0 ? (<Notification/>) : (
    <Statistics good={good} neutral={neutral} bad={bad} 
    total={total} positiveFeedback={positiveFeedback}/>)
     }
    </Section>
    </>
  )
}
