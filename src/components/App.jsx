import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // State update
  const handleClick = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
    //Check what button is clicked
    //console.log(type);
  };

  // To sum clicked buttons
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  // Calculate good feedback percentage
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = feedback;
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {
          //Condition to show notif if the total is zero
          total === 0 ? (
            <Notification message="No feedbacks given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )
        }
      </Section>
    </>
  );
};
