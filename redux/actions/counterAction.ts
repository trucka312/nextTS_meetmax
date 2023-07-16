export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});
// accountActions.js
export const incrementByValue = (value: any) => ({
  type: 'INCREMENT_VALUE',
  payload: value,
});

// ... other account-related actions
