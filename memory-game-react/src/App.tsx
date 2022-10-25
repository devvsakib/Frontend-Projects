import './App.css';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import INFO_CHARACTER from './querys';

function App() { 

  function Shuffle(params: any) {
    var m = params.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = params[m];
      params[m] = params[i];
      params[i] = t;
    }
    setResult(params);
  }

  const [characters, setCharacters] = useState<any>([]);
  const [result, setResult] = useState<any>([]);

  const { data } = useQuery(INFO_CHARACTER, { variables: { ListIds: [1, 2, 3, 4, 5, 14, 15, 20, 18, 17] } });

  useEffect(() => {
    const fetchData = async () => {
      const result = await data;
      return result;
    }

    const char = fetchData()
    char.then((res) => {
      setCharacters(res.charactersByIds);
    });
  }, [data]);

  useEffect(() => {
    if (characters) {
      Shuffle([...characters, ...characters]);
    }
  }, [characters]);

  const [selected, setSelected] = useState(0);

  const handleClick = (id: number) => {
    console.log(id);
    /** AJUSTAR ESTE BLOCO PARA PEGAR O ID DO COMPONENT CARD */
    /*let newSelected = event.target.id;
    setSelected(newSelected);
    
    if (selected === newSelected) { //test if the same card is clicked twice
      console.log('acertou');
      console.log('newSelected: ' + newSelected);
      console.log('selected: ' + selected);
      setSelected(0);
    } else if (selected !== newSelected && selected != 0) {
      console.log('errou');
      console.log('newSelected: ' + newSelected);
      console.log('selected: ' + selected);
      setSelected(0);
    }*/
  }

  return (
    <>
      <Header />
      <Card result={result} id={result.map.id} handleClick={handleClick} flipped={true}/>
      <Footer />
    </>
  );
}

export default App;
