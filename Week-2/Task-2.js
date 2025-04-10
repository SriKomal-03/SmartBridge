export default function MathOperations() {
    const numA = 10, numB = 5;
    return (
      <div>
        <h2>Math Operations</h2>
        <p>Addition: {numA + numB}</p>
        <p>Multiplication: {numA * numB}</p>
        <p>Modulus: {numA % numB}</p>
      </div>
    );
  }
  