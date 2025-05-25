export const getInventory = () => {
    const data = localStorage.getItem("inventoryData");
    return data ? JSON.parse(data) : {};
  };
  
  export const setInventory = (inventory) => {
    localStorage.setItem("inventoryData", JSON.stringify(inventory));
  };
  
  export const initInventory = (foodData) => {
    const exists = localStorage.getItem("inventoryData");
    if (!exists) {
      const initial = {};
      foodData.forEach(item => {
        initial[item.slug] = item.defaultStock ?? 10;
      });
      setInventory(initial);
    }
  };
  