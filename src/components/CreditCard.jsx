function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const lastFourDigits = number.slice(-4);
    const cardTypeLogo = type === 'Visa' ? '../../../src/assets/images/visa.png' : '/img/master-card.svg';
    const cardStyle = {
      backgroundColor: bgColor,
      color: color,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      borderRadius: '15px',
      padding: '20px',
      width: '350px',
      height: '200px',
      backgroundSize: 'contain',
      backgroundPosition: 'right top',
      backgroundRepeat: 'no-repeat',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
      margin: '20px'
    };
    const logoStyle = {
        width: '60px',
        height: '40px',
        margin: '0 auto',
        marginTop: '30px',
        marginBottom:'-30px',
        marginLeft:'200px',
      };
    const cardNumberStyle = {
      fontSize: '28px',
      letterSpacing: '2px'
    };
    const expirationDateStyle = {
      fontSize: '14px',
      textAlign:'left'
    };
    const bankStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      marginRight: '150px',
      marginTop:'9px',
    };
    const ownerStyle = {
      fontSize: '18px',
      textAlign: 'left',
      marginTom:'-25px'
    };

    const alignedStyle = {
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
  
    return (
      <div style={cardStyle}>
        <div>
        <img src={cardTypeLogo} alt="logo" style={logoStyle} />
          <p style={cardNumberStyle}>•••• •••• •••• {lastFourDigits}</p>

          <div style ={alignedStyle}>
            <p style={expirationDateStyle}>
              Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}
            </p>
            <p style={bankStyle}>{bank}</p>
          </div>

          <p style={ownerStyle}>{owner}</p>
        </div>
      </div>
    );
  }
  
  export default CreditCard;