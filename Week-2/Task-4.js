export default function ListNumbers() {
    const numberList = [];
    for (let index = 1; index <= 5; index++) {
      numberList.push(index);
    }
  
    return (
      <div>
        <h2>Number List</h2>
        <p>{numberList.join(", ")}</p>
      </div>
    );
  }
  