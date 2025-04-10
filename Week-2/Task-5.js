export default function SquareFinder() {
    function computeSquare(value) {
      return value * value;
    }
  
    return (
      <div>
        <h2>Square Finder</h2>
        <p>Square of 4: {computeSquare(4)}</p>
      </div>
    );
  }
  