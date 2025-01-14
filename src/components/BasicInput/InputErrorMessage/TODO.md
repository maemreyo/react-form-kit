# InputErrorMessage Component Design Specification

## Overview

The InputErrorMessage component is designed to display error messages for input fields in a consistent and customizable manner. It supports various features to enhance usability, accessibility, and integration across different parts of an application.

## Features

1. **Error Message Display**: 
   - Shows text-based error messages for user inputs.
   - Supports different types of errors (e.g., error, warning, info).

2. **Positioning**:
   - Allows messages to be displayed below, to the side, or inside the input field.

3. **Accessibility**:
   - Ensures readability by screen readers through ARIA labels.
   - Associates with input fields using `aria-describedby`.

4. **Customization**:
   - Provides props for styling, including className and style.
   - Supports theming and color customization based on error type.

5. **Icon Support**:
   - Displays icons alongside messages to indicate error severity.

6. **Animation**:
   - Offers fade, slide, or no animation for message appearance.

7. **Interactivity**:
   - Allows messages to be clickable, triggering a callback function.

8. **Localization**:
   - Supports internationalization by accepting translated strings.

9. **Security**:
   - Sanitizes message content to prevent XSS attacks.

10. **Performance**:
    - Optimized for minimal re-renders using memoization techniques.

## Props Table

| Prop          | Type                  | Default Value | Description                                                                 |
|---------------|-----------------------|---------------|-----------------------------------------------------------------------------|
| message       | string                | ''            | The text of the error message.                                              |
| show          | boolean               | false         | Controls the visibility of the message.                                     |
| type          | string                | 'error'       | Specifies the type of error (e.g., 'error', 'warning', 'info').            |
| position      | string                | 'below'       | Determines the position relative to the input ('below', 'side', 'inside'). |
| className     | string                | ''            | Additional CSS class names for styling.                                     |
| style         | object                | {}            | Inline styles for the component.                                           |
| ariaLabel     | string                | ''            | ARIA label for accessibility.                                              |
| icon          | string or component   | null          | Icon to display alongside the message.                                     |
| animation     | string                | 'fade'        | Type of animation ('fade', 'slide', 'none').                               |
| onClick       | function              | null          | Callback function when the message is clicked.                              |
| testId        | string                | null          | For testing purposes.                                                     |
| inputId       | string                | null          | The ID of the associated input field.                                      |
| maxLength     | number                | null          | Maximum number of characters to display.                                   |
| truncate      | boolean               | false         | Whether to truncate the message if it exceeds maxLength.                  |
| link          | string                | null          | A link to additional information about the error.                         |
| linkText      | string                | 'Learn more'  | Text for the link.                                                        |

## Considerations

- **State Management**: Manage visibility and content through props.
- **Touch-Friendliness**: Ensure smooth interactions on mobile devices.
- **Security**: Sanitize message content to prevent injection attacks.
- **Documentation**: Provide comprehensive prop descriptions and examples.
- **Integration**: Seamlessly integrate with form validation libraries.

## Conclusion

The InputErrorMessage component is a versatile tool for displaying error messages, offering a wide range of customization options and ensuring accessibility and performance. It is designed to be adaptable to various design systems and form validation scenarios, enhancing the overall user experience.