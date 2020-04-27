import React, { useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFileter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(enteredFileter === inputRef.current.value) {
        const query = 
      enteredFileter.length === 0
        ? ''
        : `?orderBy="title"&equalTo="${enteredFileter}"`; 
      fetch('https://hook-practice.firebaseio.com/ingredients.json' + query)
        .then(response => response.json())
        .then(responseData => {
          const loadedIngredients = [];
          for (const key in responseData) {
            loadedIngredients.push({
              id: key,
              title: responseData[key].title,
              amount: responseData[key].amount
            });
        }
          onLoadIngredients(loadedIngredients);
      })
      } 
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFileter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text"
           value={enteredFileter} 
           ref= {inputRef}
           onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
