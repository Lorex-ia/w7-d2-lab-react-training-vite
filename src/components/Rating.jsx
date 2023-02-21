function Rating({ children }) {
    const fullStars = Math.round(children);
    const emptyStars = 5 - fullStars;
    const starArray = [];
  
    for (let i = 0; i < fullStars; i++) {
      starArray.push(<span key={i}>★</span>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      starArray.push(<span key={fullStars + i}>☆</span>);
    }
  
    return (
      <div>
        {starArray}
      </div>
    );
  }
  export default Rating;
