# ComboBox Component Design Specification

## Overview

The `ComboBox` component is a versatile and highly customizable dropdown input that combines search, selection, and filtering features. It provides real-time suggestions as users type, supports custom matching logic, and includes advanced features like keyboard navigation, loading states, and error handling. The component is designed to be accessible, responsive, and performant, making it suitable for a wide range of applications.

---

## Features

1. **Instant Search with Debounce Input**:
   - Provides real-time suggestions as the user types.
   - Implements debouncing to optimize performance.

2. **Custom Matching Logic**:
   - Allows developers to define custom matching functions.
   - Default matching logic is case-insensitive and substring-based.

3. **Highlight Matching Text**:
   - Highlights parts of suggestion text that match the input.
   - Ensures security by preventing XSS attacks.

4. **Loading States**:
   - Displays a loading indicator during asynchronous data fetching.
   - Handles error states and displays appropriate messages.

5. **No Results Message**:
   - Shows a customizable message when no suggestions match the input.

6. **Recent Selections**:
   - Displays recently selected items at the top of the suggestion list.
   - Stores recent selections in local storage or component state.

7. **Keyboard Navigation**:
   - Supports navigation and selection using keyboard keys.
   - Ensures accessibility with ARIA roles and properties.

8. **Clear Input Button**:
   - Provides a button to clear the input value.
   - Ensures accessibility with proper ARIA labels.

9. **Accessibility**:
   - Complies with ARIA standards for screen readers and keyboard navigation.

10. **Performance Optimization**:
    - Uses memoization to prevent unnecessary re-renders.
    - Optimized for rendering large datasets with virtual scrolling.

11. **Responsiveness**:
    - Adapts to different screen sizes and devices.
    - Ensures touch-friendly interactions for mobile devices.

12. **Customization**:
    - Supports custom styling and theming via CSS-in-JS or CSS variables.
    - Allows overriding default styles and behaviors.

---

## Props Table

| Prop                  | Type                  | Default Value | Description                                                                 |
|-----------------------|-----------------------|---------------|-----------------------------------------------------------------------------|
| value                 | string                | ''            | The current value of the input (controlled).                                |
| defaultValue          | string                | ''            | The default value of the input (uncontrolled).                              |
| onChange              | function              | () => {}      | Callback function triggered when the input value changes.                   |
| onSelect              | function              | () => {}      | Callback function triggered when a suggestion is selected.                  |
| options               | array<string> or array<object> | []      | List of suggestions to display.                                            |
| matchFn               | function              | null          | Custom matching function for filtering suggestions.                         |
| debounceTime          | number                | 300           | Debounce time in milliseconds for input changes.                            |
| loading               | boolean               | false         | Displays a loading indicator during asynchronous data fetching.             |
| error                 | string                | ''            | Displays an error message when data fetching fails.                         |
| noResultsMessage      | string                | 'No results found.' | Message to display when no suggestions match the input.               |
| recentSelections      | array<string>         | []            | List of recently selected items to display at the top of the suggestion list. |
| showClearButton       | boolean               | true          | Displays a clear button to reset the input value.                           |
| className             | string                | ''            | Additional CSS class names for styling.                                     |
| style                 | object                | {}            | Inline styles for the component.                                           |
| ariaLabel             | string                | 'ComboBox'    | ARIA label for accessibility.                                              |
| ariaDescribedby       | string                | ''            | ARIA attribute to associate with a description.                             |
| ariaInvalid           | boolean               | false         | ARIA attribute to indicate invalid input.                                   |
| ariaRequired          | boolean               | false         | ARIA attribute to indicate required input.                                  |
| ariaDisabled          | boolean               | false         | ARIA attribute to indicate disabled input.                                  |
| role                  | string                | null          | ARIA role attribute.                                                        |
| tabIndex              | number                | 0             | Tab index for keyboard navigation.                                          |
| testId                | string                | null          | For testing purposes.                                                     |

---

## Additional Features

1. **Dynamic Suggestions**:
   - Filters suggestions in real-time based on user input.
   - Supports custom matching logic for advanced filtering.

2. **Highlight Matching Text**:
   - Highlights parts of suggestion text that match the input.
   - Ensures secure rendering to prevent XSS attacks.

3. **Loading and Error Handling**:
   - Displays loading indicators during data fetching.
   - Shows error messages when data fetching fails.

4. **Recent Selections**:
   - Displays recently selected items at the top of the suggestion list.
   - Stores recent selections in local storage or component state.

5. **Keyboard Navigation**:
   - Supports arrow keys for navigating suggestions.
   - Ensures accessibility with ARIA roles and properties.

6. **Clear Input Button**:
   - Provides a button to clear the input value.
   - Ensures accessibility with proper ARIA labels.

7. **Performance Optimization**:
   - Uses memoization to prevent unnecessary re-renders.
   - Optimized for rendering large datasets with virtual scrolling.

8. **Responsiveness**:
   - Adapts to different screen sizes and devices.
   - Ensures touch-friendly interactions for mobile devices.

9. **Customization**:
   - Supports custom styling and theming via CSS-in-JS or CSS variables.
   - Allows overriding default styles and behaviors.

---

## Considerations

- **State Management**: Manage input value and suggestion state through props.
- **Accessibility**: Ensure full compliance with ARIA standards and keyboard navigation.
- **Performance**: Optimize rendering for dynamic updates and large datasets.
- **Documentation**: Provide clear examples and usage guidelines for developers.
- **Integration**: Ensure compatibility with popular form libraries and validation frameworks.

---

tôi cần làm design spec cho 1 component (tôi chưa biết tên là gì), nhưng nó có các phần:
1. combo box 
2. list có thể drag được ở bên dưới
Các tính năng:
1. toàn bộ tính năng của combobox
2. khi chọn 1 item, thì sẽ thêm vào list bên dưới và thêm 1 `pill` vào ô input (có thể render lên trên input, không nhất thiết phải update value của ô search)
3. list bên dưới drag thay đổi vị trí thì vị trí của pill cũng phải thay đổi theo.