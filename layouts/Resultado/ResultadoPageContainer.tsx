import React from 'react';
import { useSelectContext } from '../../context/SelectContext';
import { useFetch } from '../../hooks/useFetch';
import ResultadoPage from './ResultadoPage';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  flexDefault: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgColorGreen: {
    backgroundColor: '#7cccab'
  },
  bgColorBlue: {
    backgroundColor: '#009a8a'
  }
}));

const ResultadoPageContainer = () => {

  const { values }: any = useSelectContext();
  const { data, request, loading } = useFetch();

  React.useEffect(() => {
    if (values) {
      const URL = `https://parallelum.com.br/fipe/api/v1/${values.veiculo}/marcas/${values.marca}/modelos/${values.modelo}/anos/${values.ano}`;
      request(URL);
    }
  }, [request, values]);

  return <ResultadoPage veiculo={data} loading={loading} useStyles={useStyles} />;
};

export default ResultadoPageContainer;
