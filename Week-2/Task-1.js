export default function PersonCheck() {
    const personAge = 25;
    const isMature = personAge >= 18;
  
    return (
      <div>
        <h2>Person Check</h2>
        <p>Age: {personAge}</p>
        <p>Is Adult: {isMature ? "Yes" : "No"}</p>
      </div>
    );
  }
  