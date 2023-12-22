import { useState, useEffect } from "react";
import Words from "../Components/Words";
import axios from 'axios';

function WordsDescribed() {

  const [description, setDescription] = useState({});

    useEffect(() => {
        console.log(description)
    }, [description])

  const fetch = (word) => {
    axios.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
            "method": "GET",
            "headers": {
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            }
        })
        .then(response => {
            console.log('Promise fulfilled')
            setDescription(response.data)
            console.log(response.data)
        })
        .catch((error) => {
          console.log('Error fetching data', error);
        });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(e.target.elements.search.value)
  };

  return (
    <div>
      <Words onSubmit={handleSubmit} />
      <div>{ description.word }</div>
      <div>{ description && description.results && description.results[0] ? description.results[0].definition : 'Loading...' }</div>
    </div>
  );
}

export default WordsDescribed;
