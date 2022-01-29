import React from 'react';
import HomePage from './HomePage';
import { useSelectContext } from '../../context/SelectContext';

const HomePageContainer = () => {

  const { values, handleChange, aleatorio, setAleatorio }: any = useSelectContext();

  setAleatorio('Jonathan');
  
  console.log('Aleatorio:', aleatorio);

  return <HomePage values={values} handleChange={handleChange} />;
};

export default HomePageContainer;
