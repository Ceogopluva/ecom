const localforage = require("localforage");

localforage.config({
  driver: localforage.INDEXEDDB,
  name: "myApp",
  version: 1.0,
  storeName: "cart",
  description: "cart store",
});

export { localforage };
