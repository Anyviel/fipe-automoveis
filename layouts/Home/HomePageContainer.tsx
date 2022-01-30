import React from 'react';
import HomePage from './HomePage';
import { useSelectContext } from '../../context/SelectContext';

const HomePageContainer = () => {

  const { values, handleChange }: any = useSelectContext();

  return <HomePage values={values} handleChange={handleChange} />;
};

export default HomePageContainer;
