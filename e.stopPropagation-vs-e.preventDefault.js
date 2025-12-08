// StopPropagation vs PreventDefault

// | Feature                      | preventDefault | stopPropagation |
// | ---------------------------- | ---------------|---------------- |
// | Stops default browser action | ✅ Yes        | ❌ No           |
// | Stops event bubbling         | ❌ No         | ✅ Yes          |
// | Example usage                | Prevent form  |Avoid triggering  |
//                                |submit, disable| parent click event|
//                                |link navigation|                 |
// ------------------------------------------------------------------

// PreventDefault :-
// 💡 Stops the default browser behavior, but does NOT stop event bubbling / propagation.

// 🟢 Examples:-

// | Action                    | Default Behavior |
// | ------------------------- | ------------------------- |
// | Clicking an`<a href="">`  | Navigates to another page |
// | Submitting a form         | Page reload |
// | Right - click             | Opens context menu |
// | Checkbox click            | Toggles check |


// StopPropagation :-