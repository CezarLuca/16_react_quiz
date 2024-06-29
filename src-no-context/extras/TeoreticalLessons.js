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
    3. useReducer need reducer (like setState() with superpowers): function containing all logic
        to update state. Decouples state logic from component logic.
    4. reducer: pure function (no side effects!) that takes current state and action, and returns
        the next state.
    5. action: object that describes how to update state. Must have a type property.
    6. dispatch: function to trigger state updates, by "sending" (instead of setState()) actions
    from event handlers to the reducer.
*/
//----------------------------------------------------------------------------------------------
/* useReducer Syntax:

    const [state, dispatch] = useReducer(reducer, initialState);
    - state: current state value.
    - dispatch: function to trigger an action.
    - reducer: pure function that takes state and action as arguments, and returns the next state.
    - initialState: initial state value.
*/
//----------------------------------------------------------------------------------------------
/* Just like arary.reduce() reduces an array to a single value, useReducer() accumulates (reduces)
    actions (over time) to a single state object.
 */
//----------------------------------------------------------------------------------------------
