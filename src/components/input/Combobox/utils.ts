export const matchSuggestion = (
  options: (string | { label: string; value: string })[],
  inputValue: string
) => {
  return options.filter((option) => {
    const text = typeof option === 'string' ? option : option.label;
    return text.toLowerCase().includes(inputValue.toLowerCase());
  });
};
