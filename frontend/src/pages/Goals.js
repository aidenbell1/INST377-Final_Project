import React, { useState } from 'react';

function GoalsPage() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const handleGoalInput = (e) => {
    setGoal(e.target.value);
  };

  const handleAddGoal = () => {
    if (goal.trim() !== '') {
      setGoalsList([...goalsList, goal]);
      setGoal('');
    }
  };

  const handleDeleteGoal = (index) => {
    const newGoalsList = goalsList.filter((_, goalIndex) => goalIndex !== index);
    setGoalsList(newGoalsList);
  };

  return (
    <div className="fade-in-page"> {/* Apply the fade-in animation */}
      <div className="goals-page">
        <section className="goals-header">
          <h1>Set Your Carbon Reduction Goals</h1>
          <p>
            Setting clear goals is a powerful way to take action and reduce your carbon footprint. 
            The Carbon Tracker app lets you track your progress as you work towards reducing your emissions.
          </p>
        </section>
        
        <section className="goal-input">
          <h2>Enter Your Goal</h2>
          <div className="input-container">
            <input 
              type="text" 
              value={goal} 
              onChange={handleGoalInput} 
              placeholder="Enter your carbon reduction goal..." 
            />
            <button onClick={handleAddGoal} className="add-goal-btn">
              Add Goal
            </button>
          </div>
        </section>

        <section className="current-goals">
          <h2>Your Current Goals</h2>
          <div className="goal-list">
            {goalsList.length === 0 ? (
              <p>No goals set yet. Start by adding a goal!</p>
            ) : (
              <ul>
                {goalsList.map((goal, index) => (
                  <li key={index}>
                    {goal}
                    <button onClick={() => handleDeleteGoal(index)} className="delete-goal-btn">
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="tracking-progress">
          <h2>Tracking Your Progress</h2>
          <div className="progress-instructions">
            <h3>Monitor Your Goal Achievements</h3>
            <p>
              Once you've set your carbon reduction goals, use the tracking features in the app to
              monitor your progress. By regularly checking your emissions data and updating your goals,
              you can see how much you've reduced your carbon footprint and adjust accordingly.
            </p>
            <h3>Adjust Your Goals as Needed</h3>
            <p>
              If you achieve your goals or want to set more ambitious targets, you can update your
              goals at any time. The app will help you track your progress and suggest new actions to
              further reduce your emissions.
            </p>
          </div>
        </section>

        <section className="goal-settings">
          <h2>Examples of Carbon Reduction Goals</h2>
          <p>Here are some examples of goals you can set:</p>
          <ul>
            <li>Reduce electricity usage by 10% over the next 6 months</li>
            <li>Cut down on car usage by switching to public transport for work</li>
            <li>Reduce meat consumption by 25% to lower food-related emissions</li>
            <li>Plant 10 trees to offset your carbon emissions</li>
          </ul>
          <p>These goals can help you make a tangible impact on your carbon footprint.</p>
        </section>
      </div>
    </div>
  );
}

export default GoalsPage;
