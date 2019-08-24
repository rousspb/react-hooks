import React, { useReducer, useContext, createContext } from 'react';
import axios from 'axios';
const DogStateProvider = createContext();

function dogReducer(state, action) {
  switch (action.type) {
    case 'getAllDogs':
      return {
        dogs: [...action.data],
        breed: state.breed
      };
    case 'getSubBreed':
      return {
        dogs: [...state.dogs],
        breed: [...action.data]
      };
    default:
      return {
        dogs: [...state.dogs],
        breed: [...state.breed]
      };
  }
}

const DogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dogReducer, {
    dogs: [],
    breed: []
  });

  function getAllDogs() {
    axios.get('https://dog.ceo/api/breeds/image/random/50').then(res => {
      const dogs = res.data.message.map(dog => {
        const splitDog = dog.split('/');
        const name = splitDog[splitDog.length - 2];
        return { name: name.split('-')[0], pic: dog };
      });
      dispatch({ type: 'getAllDogs', data: dogs });
    });
  }

  function getPicsByBreed(name) {
    axios.get(`https://dog.ceo/api/breed/${name}/images`).then(res => {
      dispatch({ type: 'getSubBreed', data: res.data.message });
    });
  }

  function filterDogs(search) {
    if (search) {
      const dogs = state.dogs.filter(dog => dog.name.indexOf(search.toLocaleLowerCase()) !== -1);
      dispatch({ type: 'getAllDogs', data: dogs });
    } else {
      getAllDogs();
    }
  }
  return (
    <DogStateProvider.Provider
      value={{ dogs: state.dogs, breed: state.breed, getAllDogs, getPicsByBreed, filterDogs }}
    >
      {children}
    </DogStateProvider.Provider>
  );
};

function useDogState() {
  const context = useContext(DogStateProvider);
  if (context === undefined) {
    throw new Error('DogStateProvider must be used within a DogProvider');
  }
  return context;
}

export { DogProvider, useDogState };
