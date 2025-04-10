export default function ParityChecker() {
    const checkNum = 7;
    const isEvenNum = checkNum % 2 === 0;
  
    return (
      <div>
        <h2>Even or Odd Checker</h2>
        <p>Number: {checkNum}</p>
        <p>{isEvenNum ? "Even" : "Odd"}</p>
      </div>
    );
  }
  