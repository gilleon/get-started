import logo from "../assets/react-core-concepts.png";

const randomWords = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  //dynamic get the length of the array using the length function
  const len = randomWords.length;
  const description = randomWords[getRandomInt(len)];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>Get Started</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
export default Header;
