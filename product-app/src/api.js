let BASE_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async (term) =>{
  if (term !== null && term !== undefined && term !== ""){
    BASE_URL += "?search=" + term;
  }
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        const data = response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
};