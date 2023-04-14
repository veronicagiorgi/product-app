const Stars = ({ value, max, empty, full, half }) => {
  const result = [];

  for (let i = 0; i < value; i++) {
    result.push(<i key={i} className={full}></i>);
  }
  for (let i = value; i < max; i++) {
    result.push(<i key={i} className={empty} ></i>);
  }
  // if (value - parseInt(value) > 0.5) {
  //   result.push(<i className={half}></i>);
  // }


  return <>{result}</>;
};
export default Stars;
