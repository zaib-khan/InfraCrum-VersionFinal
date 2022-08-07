const name = 'infrascrum';
const getStorageValue = (id) => {
  const storage = JSON.parse(localStorage.getItem(name) || '{"msg":"no-value"}');
  return storage[id];
};

const setStorageValue = (id, value) => {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify({}));
  }
  const storage = JSON.parse(localStorage.getItem(name) || '{"msg":"no-value"}');
  storage[id] = value;
  console.log(id);
  localStorage.setItem(name, JSON.stringify(storage));
};

const emptyLocalStorage = () => {
  window.localStorage.clear();
};

export { getStorageValue, setStorageValue, emptyLocalStorage };
