#!/bin/bash

# Define the base directory for components
base_dir="src/components"

# Define the groups and their corresponding folders
input_folders="input"
layout_folders="layout"
interaction_folders="interaction"


# Function to list components in a group
list_components() {
    local folders="$1"
    local group="$2"

    # Loop through each folder in the group
    for folder in $folders; do
        # Find all component directories in the folder
        if [ -d "$base_dir/$folder" ]; then
            find "$base_dir/$folder" -mindepth 1 -maxdepth 1 -type d | while read -r component_dir; do
                # Extract the component name and print the path
                component_name=$(basename "$component_dir")
                echo "$group/$folder/$component_name"
            done
        fi
    done
}

# List components for each group
echo "Input components:"
list_components "$input_folders" "input"

echo -e "\nLayout components:"
list_components "$layout_folders" "layout"

echo -e "\nInteraction components:"
list_components "$interaction_folders" "interaction"