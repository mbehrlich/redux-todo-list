import { STEPS_CONSTANTS } from '../actions/step_actions';
import { merge } from 'lodash';



const StepsReducer = (state = {}, action) => {
  let newSteps;
  switch (action.type) {
    case STEPS_CONSTANTS.RECEIVE_STEPS:
      newSteps = {};

      action.steps.forEach(step => {
        if(!newSteps[step.todo_id]){
          newSteps[step.todo_id] = {};
        }
        newSteps[step.todo_id][step.id] = step;
      });
      return newSteps;
    case STEPS_CONSTANTS.RECEIVE_STEP:
      newSteps = merge({}, state);

      if(!newSteps[action.step.todo_id]){
        newSteps[action.step.todo_id] = {};
      }

      newSteps[action.step.todo_id][action.step.id] = action.step;
      return newSteps;
    case STEPS_CONSTANTS.REMOVE_STEP:
      newSteps = merge({}, state);
      delete newSteps[action.step.todo_id][action.step.id];
      return newSteps;
    default:
      return state;
  }
};

export default StepsReducer;
