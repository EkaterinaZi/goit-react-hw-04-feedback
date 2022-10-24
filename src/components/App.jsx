import React from "react"
import Statistics from "components/Feedback/Statistics/Statistics"
import FeedbackOptions from "components/Feedback/FeedbackOptions/FeedbackOptions"
import Notification from "components/Feedback/Notification/Notification"
import  Section  from "components/Feedback/Section/Section"

class App extends React.Component{
  static defoultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  }

onLeaveFeedback = (options) => {(
   this.setState(prevState => {
    const value = prevState[options];
    return {
      [options]: value + 1
    }
   }) );
}
countTotalFeedback(good, bad, neutral){
  return  good + bad + neutral
};

countPositiveFeedbackPercentage(good, total){
  return (Math.ceil((100 * good) / total))
};

    render(){
      const total = this.countTotalFeedback(this.state.good, this.state.neutral, this.state.bad)
      const positiveFeedback = this.countPositiveFeedbackPercentage(this.state.good, total)
    return (<>
    <Section title="Please leave feedback">
    <FeedbackOptions  options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
    {total === 0 ? (<Notification/>) : (
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} 
    total={total} positiveFeedback={positiveFeedback}/>)
     }
    </Section>
    </>
  )}
}
export default App;

