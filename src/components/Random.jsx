function Random({ min, max }) {
    let randomValue = 0;
    if (max === 6) {
      randomValue = Math.floor(Math.random() * 6) + 1;
      return (
        <p>
          Random value between 1 and 6 =&gt; {randomValue}
        </p>
      );
    } else if (max === 100) {
      randomValue = Math.floor(Math.random() * 100) + 1;
      return (
        <p>
          Random value between 1 and 100 =&gt; {randomValue}
        </p>
      );
    }
    return null;
  }
  
  export default Random;