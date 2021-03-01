import React from 'react';
import StepListItemContainer from './step_list_item_container';
// import StepForm from './step_form';

export const StepList = (props) => {
    return (
        <div>
            <h2>All Steps</h2>
            <ul>
                {props.stepsByTodoId(store.getState(), props.todo.id).map((step) => {
                    return (
                        <StepListItemContainer key={step.id}
                                                step={step}/>
                    )
                })}
            </ul>
            
        </div>
    )
}
