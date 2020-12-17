import React, { useContext, useEffect } from 'react';
import Routes from './Routes';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { VoteContext } from './context/vote-contex';


const App = () => {
  const contextData = useContext(VoteContext);
  const [votes, setVote] = contextData.VoteData;

  useEffect(() => {

    const data = {
      name: '',
      email: '',
      pizza: 0,
      pasta: 0,
      burger: 0,
    }
    setVote(data);
  });

  return (
    <Routes />
  )
}

export default App;
