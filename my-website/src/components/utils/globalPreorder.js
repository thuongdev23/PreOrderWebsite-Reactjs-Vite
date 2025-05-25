export const getGlobalPreorder = () => {
    const data = localStorage.getItem("globalPreorder");
    return data ? JSON.parse(data) : { start: null, end: null };
  };
  
  export const setGlobalPreorder = (data) => {
    localStorage.setItem("globalPreorder", JSON.stringify(data));
  };
  