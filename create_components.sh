#!/bin/bash

# List of component names
components=(
    "InputBase" "InputLabel" "InputControl" "InputIcon" "InputHelperText"
    "InputErrorMessage" "InputGroup" "TextAreaControl" "NumberInput" "DatePicker"
    "TimePicker" "FileUpload" "ColorPicker" "SelectBase" "MultiSelect" "Combobox"
    "AutoComplete" "CheckboxGroup" "RadioGroup" "ToggleSwitch" "ScrollArea"
    "Badge" "Pill" "Tooltip" "Popover" "ValidationSummary" "ConfirmDialog"
    "FormActions" "ProgressIndicator" "LoadingSpinner" "ValidationIcon"
    "FormGroup" "FormRow" "FormDivider" "FormMessage" "FormSection"
    "FormGrid" "FormStepper" "FormAccordion" "FormTabs" "FieldArray"
    "DynamicField" "DraggableList"
)

# Loop through each component and create folder and files
for component in "${components[@]}"
do
    # Create component directory
    mkdir -p "$component"
    echo "Created directory $component"

    # Create index.ts if it doesn't exist
    if [ ! -f "$component/index.ts" ]; then
        echo "export { ${component} } from './${component}';" > "$component/index.ts"
        echo "export * from './types';" >> "$component/index.ts"
        echo "Created and populated $component/index.ts"
    else
        echo "$component/index.ts already exists"
    fi

    # Create <component_name>.tsx if it doesn't exist
    if [ ! -f "$component/${component}.tsx" ]; then
        echo "import React from 'react';" > "$component/${component}.tsx"
        echo "" >> "$component/${component}.tsx"
        echo "export const ${component} = () => {" >> "$component/${component}.tsx"
        echo "  return <div>${component}</div>;" >> "$component/${component}.tsx"
        echo "};" >> "$component/${component}.tsx"
        echo "Created and populated $component/${component}.tsx"
    else
        echo "$component/${component}.tsx already exists"
    fi

    # Create TODO.md if it doesn't exist
    if [ ! -f "$component/TODO.md" ]; then
        touch "$component/TODO.md"
        echo "Created $component/TODO.md"
    else
        echo "$component/TODO.md already exists"
    fi

    # Create styled.ts if it doesn't exist
    if [ ! -f "$component/styled.ts" ]; then
        touch "$component/styled.ts"
        echo "Created $component/styled.ts"
    else
        echo "$component/styled.ts already exists"
    fi

    # Create types.ts if it doesn't exist
    if [ ! -f "$component/types.ts" ]; then
        echo "export {}" > "$component/types.ts"
        echo "Created and populated $component/types.ts"
    else
        echo "$component/types.ts already exists"
    fi
done