#!/bin/bash

# Define the base directory for components
base_dir="src/components"

# List of group directories
group_dirs=("input" "interaction" "layout")

# Function to create index.ts in a group directory
create_index_file() {
    local group_dir="$1"
    local index_file="$base_dir/$group_dir/index.ts"

    # Start with an empty index file
    > "$index_file"

    # Find all component directories in the group directory
    find "$base_dir/$group_dir" -mindepth 1 -maxdepth 1 -type d | while read -r component_dir; do
        # Extract the component name from the directory path
        component_name=$(basename "$component_dir")

        # Add export statement for the component
        echo "export { ${component_name} } from './${component_name}';" >> "$index_file"
    done

    echo "Created/updated $index_file"
}

# Loop through each group directory and create/update index.ts
for group_dir in "${group_dirs[@]}"; do
    if [ -d "$base_dir/$group_dir" ]; then
        create_index_file "$group_dir"
    else
        echo "Directory $base_dir/$group_dir does not exist. Skipping..."
    fi
done