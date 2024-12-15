import React from 'react';

function AboutPage() {
  return (
    <div className="fade-in-page"> {/* Apply the fade-in animation */}
      <div className="about-page">
        <section className="header">
          <h1>Welcome to Carbon Tracker</h1>
          <p>
            Our mission is to empower individuals to take control of their carbon footprint and
            make informed decisions about their environmental impact. Together, we can help create
            a sustainable future, one small change at a time.
          </p>
        </section>
        
        <section className="purpose">
          <h2>Our Purpose</h2>
          <p>
            Carbon Tracker is more than just a tool—it's a movement. We strive to provide users
            with the resources they need to reduce their carbon footprint through daily tracking,
            education, and actionable tips. Our goal is to inspire a global community dedicated
            to fighting climate change.
          </p>
          <p>
            By tracking your carbon emissions in key areas like electricity usage, travel, and daily
            activities, we make it easy to understand where changes can be made. With data-backed
            insights, users can make better choices and contribute to a greener planet.
          </p>
        </section>
        
        <section className="emissions-info">
          <h2>What Are Carbon Emissions?</h2>
          <p>
            Carbon emissions are gases like carbon dioxide (CO2) that are released into the
            atmosphere as a result of human activities, such as burning fossil fuels for energy
            and transportation. These emissions trap heat in the atmosphere, contributing to
            global warming and climate change.
          </p>
          <p>
            By measuring and understanding your personal carbon footprint, you can actively reduce
            the amount of CO2 and other greenhouse gases that contribute to the planet’s warming.
            Even small reductions in carbon emissions can make a significant impact when adopted
            on a larger scale.
          </p>
          <p>
            At Carbon Tracker, we provide easy-to-understand metrics and suggestions to help you
            make eco-friendly choices in your daily life, from reducing energy consumption to
            choosing sustainable modes of transportation.
          </p>
        </section>
        
        <section className="habits">
          <h2>Daily Habit Changes for a Greener Tomorrow</h2>
          <p>
            The road to sustainability doesn’t require drastic overhauls. In fact, small, consistent
            changes in your everyday habits can add up to significant reductions in your carbon footprint.
            Whether it's swapping out your energy sources for renewable options, using public transport
            instead of driving, or opting for plant-based meals—every action counts.
          </p>
          <p>
            Here are just a few habits that can drastically reduce your carbon footprint:
          </p>
          <ul>
            <li>Use energy-efficient appliances and switch to LED lighting.</li>
            <li>Reduce, reuse, and recycle—minimize waste and landfill contribution.</li>
            <li>Walk or bike when possible, or consider carpooling and using public transit.</li>
            <li>Choose sustainable food options, such as plant-based or locally sourced foods.</li>
            <li>Unplug electronics when not in use to conserve energy.</li>
          </ul>
          <p>
            Each of these simple steps, when practiced daily, contributes to a cleaner, greener,
            and more sustainable world. Our hope is to help you make conscious, informed decisions
            that benefit not only you but also the environment.
          </p>
        </section>
        
        <section className="join-us">
          <h2>Join the Movement</h2>
          <p>
            Reducing your carbon footprint is a journey, and every step you take brings us closer to a
            sustainable future. Start today by tracking your carbon emissions and setting achievable
            goals for reducing them over time. Together, we can make a real difference in the fight
            against climate change.
          </p>
          <p>
            At Carbon Tracker, we’re here to support you every step of the way. Join thousands of other
            users who are taking action and contributing to a healthier planet. Let’s work together to
            leave a lasting positive impact on the world we share.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
