export const sumItemsTotal = (items) => {
  return items.reduce((acc, item) => acc + item.total_price, 0);
};
