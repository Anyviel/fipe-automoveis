import React from 'react';
import { useSelectContext } from '../../context/SelectContext';
import { useFetch } from '../../hooks/useFetch';
import ResultadoPage from './ResultadoPage';

const ResultadoPageContainer = () => {

  const { values, aleatorio }: any = useSelectContext();
  const { data, request, loading } = useFetch();

  React.useEffect(() => {
    if (values) {
      const URL = `https://parallelum.com.br/fipe/api/v1/${values.veiculo}/marcas/${values.marca}/modelos/${values.modelo}/anos/${values.ano}`;
      request(URL);
    }
  }, [request, values]);

  console.log('AleatorioResult: ', aleatorio);
  console.log('Values: ', values);
  console.log('Data: ', data);

  return <ResultadoPage veiculo={data} loading={loading} />;
};

export default ResultadoPageContainer;
