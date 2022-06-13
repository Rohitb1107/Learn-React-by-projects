const initState = {
  todos: [
    {
      id: 1,
      title: "LEARN_REDUX",
      status: false,
    },
  ],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
