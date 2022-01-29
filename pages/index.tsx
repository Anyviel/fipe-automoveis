import type { NextPage } from 'next'
import React from 'react';

import HomePageContainer from '../layouts/Home';
import { useSelectContext } from '../context/SelectContext';

const Home: NextPage = () => {

  const { values } = useSelectContext();

  console.log('ValuesIndex: ', values);

  return (
    <HomePageContainer />
  )
}

export default Home;
