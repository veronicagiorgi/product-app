import { useEffect, useState } from "react";

const SearchBar = ({ filterData }) => {

  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputValue);
  //   callWhenSubmit(inputValue);
  // };

  useEffect(()=>{
    filterData(inputValue);
  }, [inputValue, filterData]);

  return (
    <form className="form-inline d-flex">
      <input
        type="search"
        className="form-control"
        placeholder="search"
        value={inputValue}
        onChange={handleSearchChange}
      ></input>
      <button type="submit" className="btn btn-secondary ms-2 mt-2">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};
export default SearchBar;