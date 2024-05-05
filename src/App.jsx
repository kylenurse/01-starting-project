import InputGroup from "../Components/input-group"
import Header from "../Components/Header"
import { useState } from "react"
import Results from "../Components/Results";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(newValue, inputIdentifier) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: newValue
        }
    });
}

  return (
    <>
      <Header />
      <InputGroup onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );

}

export default App
