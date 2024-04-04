//----------------------------------------------------------------------------------------------
/* Why useReducer?

    Stete Management with useState is not enough in certain situations:
        1. When components have a lot of state variables and state updates, spread across many 
        event handlers all over the component.
        2. When multiple state updates need to happen at the same time (as a reaction to the same
            event, like "starting a game" or "submitting a form").
        3. When updating one piece of state depends on one or multiple other pieces of state.
    In all these cases, useReducer can be a better solution than useState.
*/
//----------------------------------------------------------------------------------------------
/* Managing State with useReducer:

    1. An alternative way of setting state, ideal for complex state and related pieces of state.
    2. Stores related pieces of state in a state object.
    3. useReducer need reducer: function containing all logic to update state. Decouples state 
        logic from component logic.
    4. 
    5. 
*/
