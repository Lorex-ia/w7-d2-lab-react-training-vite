function BoxColor({ r, g, b }) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const divStyle = {
      backgroundColor: rgb,
      width: '200px',
      height: '50px',
    };
    
    return (
      <div>
        <div style={divStyle}></div>
        <p>{rgb}</p>
      </div>
    );
  }
  
  export default BoxColor;