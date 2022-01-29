import type { NextPage } from 'next'
import React from 'react';

import ResultadoPageContainer from '../../layouts/Resultado';

import { useSelectContext } from '../../context/SelectContext';

const Resultado: NextPage = () => {
  const { values } = useSelectContext();

  console.log('ValuesResult: ', values);

  return <ResultadoPageContainer />
}

export default Resultado;