export const findItemFromCart = (items, id) => {
  console.log(items, id);
  return items.find((obj) => obj.id === id);
};
