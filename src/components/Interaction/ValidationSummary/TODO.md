# ValidationSummary Component Design Specification

## Overview

The ValidationSummary component is used to display a summary of validation errors or messages for a form or input group. It consolidates all validation issues into a single, easily readable list, helping users quickly identify and correct errors. This component is highly customizable and supports various features to enhance usability, accessibility, and integration across different applications.

---

## Features

1. **Error Aggregation**:
   - Aggregates and displays multiple validation errors in a single list.

2. **Customization**:
   - Allows customization of colors, icons, and layouts.
   - Supports dynamic theming and styling.

3. **Accessibility**:
   - Ensures compatibility with screen readers using ARIA attributes.
   - Provides descriptive labels and error messages for accessibility.

4. **Dynamic Updates**:
   - Updates the summary dynamically based on validation results.

5. **Interactivity**:
   - Supports clickable error messages to focus on the corresponding input field.

6. **Localization**:
   - Supports internationalization by accepting translated error messages.

7. **Security**:
   - Sanitizes error messages to prevent XSS attacks.

8. **Performance**:
   - Optimized for minimal re-renders and efficient updates.

9. **Integration**:
   - Seamlessly integrates with form validation libraries and input fields.

---

## Props Table

| Prop            | Type                  | Default Value | Description                                                                 |
|-----------------|-----------------------|---------------|-----------------------------------------------------------------------------|
| errors          | array<object>         | []            | Array of error objects containing `message` and `fieldId`.                  |
| show            | boolean               | true          | Controls the visibility of the validation summary.                          |
| className       | string                | ''            | Additional CSS class names for styling.                                     |
| style           | object                | {}            | Inline styles for the component.                                           |
| ariaLabel       | string                | 'Validation Summary' | ARIA label for accessibility.                                              |
| icon            | string or component   | null          | Custom icon to display alongside error messages (e.g., SVG, FontAwesome).   |
| iconColor       | string                | '#DC3545'     | Color of the error icon (e.g., hex code, CSS color name).                   |
| errorColor      | string                | '#DC3545'     | Color of the error text.                                                   |
| warningColor    | string                | '#FFC107'     | Color of the warning text (if applicable).                                 |
| onErrorClick    | function              | null          | Callback function triggered when an error message is clicked.               |
| focusOnClick    | boolean               | true          | Focuses on the corresponding input field when an error message is clicked.  |
| testId          | string                | null          | For testing purposes.                                                     |
| header          | string                | 'Please correct the following errors:' | Header text for the summary.                          |
| headerClassName | string                | ''            | Additional CSS class names for the header.                                  |
| headerStyle     | object                | {}            | Inline styles for the header.                                              |
| listClassName   | string                | ''            | Additional CSS class names for the error list.                              |
| listStyle       | object                | {}            | Inline styles for the error list.                                          |
| itemClassName   | string                | ''            | Additional CSS class names for each error item.                             |
| itemStyle       | object                | {}            | Inline styles for each error item.                                         |
| animation       | string                | 'fade'        | Type of animation for showing/hiding the summary ('fade', 'slide', 'none'). |
| animationDuration | number              | 300           | Duration of the animation in milliseconds.                                  |
| scrollToSummary | boolean               | false         | Automatically scrolls to the summary when errors are displayed.             |
| zIndex          | number                | 1000          | Z-index of the validation summary.                                          |

---

## Error Object Structure

Each error object in the `errors` array should have the following structure:

```javascript
{
  message: string, // The error message to display.
  fieldId: string  // The ID of the associated input field (optional).
}
```

---

## Considerations

- **State Management**: Manage errors and summary visibility through props.
- **Accessibility**: Ensure the summary is accessible to screen readers and keyboard users.
- **Performance**: Optimize rendering for dynamic updates.
- **Documentation**: Provide clear examples and usage guidelines for developers.
- **Integration**: Ensure seamless integration with form validation libraries and input fields.

---

## Conclusion

The ValidationSummary component is a powerful and user-friendly tool for consolidating and displaying validation errors in a clear and concise manner. It is designed to be highly customizable, accessible, and performant, making it suitable for a wide range of applications and design systems. By integrating this component, developers can enhance the usability and clarity of their forms, helping users quickly identify and resolve errors.