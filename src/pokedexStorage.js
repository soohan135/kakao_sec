export const notifyStorageChange = () => {
  window.dispatchEvent(new Event("poketmonDexChanged"));
};