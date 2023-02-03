const items = [
  {
    id: 1,
    itemName: "Book",
    price: 50,
    stock: 1,
  },
  {
    id: 2,
    itemName: "Pen",
    price: 10,
    stock: 7,
  },
  {
    id: 3,
    itemName: "Pencil",
    price: 7,
    stock: 10,
  },
  {
    id: 4,
    itemName: "Eraser",
    price: 5,
    stock: 15,
  },
  {
    id: 5,
    itemName: "Sharpner",
    price: 5,
    stock: 12,
  },
  {
    id: 6,
    itemName: "Box",
    price: 20,
    stock: 9,
  },
  {
    id: 7,
    itemName: "Scale",
    price: 10,
    stock: 13,
  },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  const item = items.filter((item) => item.id === id);
  return item;
}
