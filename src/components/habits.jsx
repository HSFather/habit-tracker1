import React from 'react';
import AddForm from "./addForm";
import Habit from "./habit";


const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <div className="habits">
        <AddForm onAdd={onAdd} />
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={onReset}>Reset All</button>
      </div>
    );
  };

export default Habits;
