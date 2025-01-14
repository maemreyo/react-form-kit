# InputIcon Component Design Specification

## Overview

The InputIcon component is designed to display an icon inside or alongside an input field. It enhances the visual appeal and usability of input fields by providing visual cues, such as indicating the type of input (e.g., email, password) or displaying actionable icons (e.g., clear, search). This component is highly customizable and supports accessibility, responsiveness, and integration with various design systems.

---

## Features

1. **Icon Display**:
   - Displays an icon inside or beside an input field.

2. **Customization**:
   - Supports custom icons through props (e.g., SVG, FontAwesome, Material Icons).
   - Allows for dynamic theming and color customization.

3. **Positioning**:
   - Allows the icon to be positioned inside the input field (left or right) or outside (above, below, or beside).

4. **Accessibility**:
   - Ensures compatibility with screen readers using ARIA attributes.
   - Associates the icon with the input field using `aria-describedby`.

5. **Interactivity**:
   - Supports clickable icons with callback functions (e.g., clear input, toggle password visibility).

6. **Dynamic State**:
   - Updates icon appearance based on input field state (e.g., valid, invalid, focused).

7. **Localization**:
   - Supports internationalization by accepting translated labels for screen readers.

8. **Security**:
   - Sanitizes icon content to prevent XSS attacks.

9. **Performance**:
   - Optimized for minimal re-renders using memoization techniques.

10. **Integration**:
    - Seamlessly integrates with input fields and form validation libraries.

---

## Props Table

| Prop          | Type                  | Default Value | Description                                                                 |
|---------------|-----------------------|---------------|-----------------------------------------------------------------------------|
| icon          | string or component   | null          | The icon to display (e.g., SVG, FontAwesome, Material Icons).               |
| position      | string                | 'left'        | Position of the icon relative to the input ('left', 'right', 'above', 'below', 'outside'). |
| onClick       | function              | null          | Callback function when the icon is clicked.                                 |
| className     | string                | ''            | Additional CSS class names for styling.                                     |
| style         | object                | {}            | Inline styles for the component.                                           |
| ariaLabel     | string                | ''            | ARIA label for accessibility.                                              |
| size          | string or number      | 'medium'      | Size of the icon (e.g., 'small', 'medium', 'large', or numeric value).      |
| color         | string                | 'inherit'     | Color of the icon (e.g., hex code, CSS color name).                         |
| isDisabled    | boolean               | false         | Disables the icon (e.g., grayed out).                                       |
| isInteractive | boolean               | false         | Enables interactivity (e.g., clickable icons).                              |
| inputId       | string                | null          | The ID of the associated input field.                                      |
| testId        | string                | null          | For testing purposes.                                                     |
| hoverEffect   | string                | null          | Adds a hover effect (e.g., 'scale', 'fade', 'rotate').                     |
| focusEffect   | string                | null          | Adds a focus effect (e.g., 'glow', 'shadow').                              |
| tooltip       | string                | null          | Displays a tooltip when hovering over the icon.                            |
| tooltipPosition | string              | 'top'         | Position of the tooltip ('top', 'bottom', 'left', 'right').                |

---

## Considerations

- **State Management**: Manage icon appearance and interactivity through props.
- **Accessibility**: Ensure icons are accessible to screen readers and keyboard users.
- **Security**: Sanitize icon content to prevent injection attacks.
- **Performance**: Optimize rendering for dynamic state changes.
- **Documentation**: Provide clear examples and usage guidelines for developers.

---

## Conclusion

The InputIcon component is a versatile and user-friendly tool for enhancing input fields with visual cues and interactivity. It is designed to be highly customizable, accessible, and performant, making it suitable for a wide range of applications and design systems. By integrating this component, developers can improve the usability and visual appeal of their forms and input fields.