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
