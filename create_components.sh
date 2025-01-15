#!/bin/bash

# Define the base directory for components
base_dir="src/components"

# List of component paths
component_paths=(
    "input/RadioGroup" "input/FileUpload" "input/TimePicker" "input/AutoComplete" "input/CheckboxGroup"
    "input/InputControl" "input/InputIcon" "input/DatePicker" "input/InputErrorMessage" "input/SelectBase"
    "input/InputBase" "input/Combobox" "input/ColorPicker" "input/NumberInput" "input/TextAreaControl"
    "input/MultiSelect" "input/InputHelperText" "input/InputLabel" "input/InputGroup" "input/SortableTagPicker"

    "layout/FormMessage" "layout/FormStepper" "layout/FormAccordion" "layout/FormGroup" "layout/FormRow"
    "layout/FormGrid" "layout/FormSection" "layout/FormTabs" "layout/FormDivider" "layout/ListBase"

    "interaction/Tooltip" "interaction/ProgressIndicator" "interaction/ValidationIcon" "interaction/ToggleSwitch"
    "interaction/Pill" "interaction/ScrollArea" "interaction/Popover" "interaction/LoadingSpinner"
    "interaction/ValidationSummary" "interaction/FormActions" "interaction/Badge" "interaction/DraggableList"
)

# Loop through each component path and create folder and files
for component_path in "${component_paths[@]}"
do
    # Define the full component directory
    component_dir="$base_dir/$component_path"

    # Extract the component name from the path (e.g., "input/RadioGroup" -> "RadioGroup")
    component_name=$(basename "$component_path")

    # Create component directory if it doesn't exist
    mkdir -p "$component_dir"
    echo "Created directory $component_dir"

    # Create index.ts if it doesn't exist or is empty
    if [ ! -f "$component_dir/index.ts" ] || [ ! -s "$component_dir/index.ts" ]; then
        echo "export { ${component_name} } from './${component_name}';" > "$component_dir/index.ts"
        echo "export * from './types';" >> "$component_dir/index.ts"
        echo "Created and populated $component_dir/index.ts"
    else
        echo "$component_dir/index.ts already exists and is not empty"
    fi

    # Create <component_name>.tsx if it doesn't exist or is empty
    if [ ! -f "$component_dir/${component_name}.tsx" ] || [ ! -s "$component_dir/${component_name}.tsx" ]; then
        echo "import React from 'react';" > "$component_dir/${component_name}.tsx"
        echo "" >> "$component_dir/${component_name}.tsx"
        echo "export const ${component_name} = () => {" >> "$component_dir/${component_name}.tsx"
        echo "  return <div>${component_name}</div>;" >> "$component_dir/${component_name}.tsx"
        echo "};" >> "$component_dir/${component_name}.tsx"
        echo "Created and populated $component_dir/${component_name}.tsx"
    else
        echo "$component_dir/${component_name}.tsx already exists and is not empty"
    fi

    # Create TODO.md if it doesn't exist
    if [ ! -f "$component_dir/TODO.md" ]; then
        touch "$component_dir/TODO.md"
        echo "Created $component_dir/TODO.md"
    else
        echo "$component_dir/TODO.md already exists"
    fi

    # Create styled.ts if it doesn't exist or is empty
    if [ ! -f "$component_dir/styled.ts" ] || [ ! -s "$component_dir/styled.ts" ]; then
        touch "$component_dir/styled.ts"
        echo "export {};" >> "$component_dir/styled.ts"
        echo "Created $component_dir/styled.ts"
    else
        echo "$component_dir/styled.ts already exists and is not empty"
    fi

    # Create or update types.ts
    if [ ! -f "$component_dir/types.ts" ] || [ ! -s "$component_dir/types.ts" ] || grep -q '^export {};$' "$component_dir/types.ts"; then
        echo "export interface ${component_name}Props {}" > "$component_dir/types.ts"
        echo "Created and populated $component_dir/types.ts"
    else
        echo "$component_dir/types.ts already exists and is not empty"
    fi

    # Create stories.tsx if it doesn't exist or is empty
    if [ ! -f "$component_dir/${component_name}.stories.tsx" ] || [ ! -s "$component_dir/${component_name}.stories.tsx" ]; then
        echo "import React from 'react';" > "$component_dir/${component_name}.stories.tsx"
        echo "import { Meta, StoryFn } from '@storybook/react';" >> "$component_dir/${component_name}.stories.tsx"
        echo "import { ${component_name} } from './${component_name}';" >> "$component_dir/${component_name}.stories.tsx"
        echo "import { ${component_name}Props } from './types';" >> "$component_dir/${component_name}.stories.tsx"
        echo "" >> "$component_dir/${component_name}.stories.tsx"
        echo "const meta: Meta = {" >> "$component_dir/${component_name}.stories.tsx"
        echo "  title: '${component_name}'," >> "$component_dir/${component_name}.stories.tsx"
        echo "  component: ${component_name}," >> "$component_dir/${component_name}.stories.tsx"
        echo "  argTypes: {}," >> "$component_dir/${component_name}.stories.tsx"
        echo "  parameters: {}," >> "$component_dir/${component_name}.stories.tsx"
        echo "};" >> "$component_dir/${component_name}.stories.tsx"
        echo "" >> "$component_dir/${component_name}.stories.tsx"
        echo "export default meta;" >> "$component_dir/${component_name}.stories.tsx"
        echo "" >> "$component_dir/${component_name}.stories.tsx"
        echo "const Template: StoryFn<${component_name}Props> = (args) => <${component_name} {...args} />;" >> "$component_dir/${component_name}.stories.tsx"
        echo "" >> "$component_dir/${component_name}.stories.tsx"
        echo "export const Default = Template.bind({});" >> "$component_dir/${component_name}.stories.tsx"
        echo "" >> "$component_dir/${component_name}.stories.tsx"
        echo "Default.args = {};" >> "$component_dir/${component_name}.stories.tsx"
        echo "Created and populated $component_dir/${component_name}.stories.tsx"
    else
        echo "$component_dir/${component_name}.stories.tsx already exists and is not empty"
    fi
done

# Function to delete empty directories
delete_empty_directories() {
    local dir="$1"
    # Find and delete empty directories
    find "$dir" -type d -empty -delete
    echo "Deleted empty directories in $dir"
}

# Delete empty directories in the base directory
delete_empty_directories "$base_dir"