function Greetings(props) {
    let greetingText = "";
    switch (props.lang) {
      case "de":
        greetingText = `Hallo ${props.children}`;
        break;
      case "en":
        greetingText = `Hello ${props.children}`;
        break;
      case "es":
        greetingText = `Hola ${props.children}`;
        break;
      case "fr":
        greetingText = `Bonjour ${props.children}`;
        break;
      default:
        greetingText = `Hello ${props.children}`;
    }
    return <div>{greetingText}</div>;
  }

export default Greetings;