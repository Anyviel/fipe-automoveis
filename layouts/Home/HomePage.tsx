import React from 'react';
import Head from 'next/head'
import { 
  Box, Button,
} from '@mui/material';
import SelectInputMarca from '../../components/SelectMarca';
import SelectInputModelo from '../../components/SelectModelo';
import SelectInputAno from '../../components/SelectAno';
import Link from 'next/link';

interface IProps {
  values: any,
  handleChange: (value: any, type: string) => void,
}

const HomePage = ({ values, handleChange }: IProps) => {

  console.log('Values: ', values);

  return (
    <Box
      component='section'
      display='grid'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      color='#333'
    >
      <Head>
        <title>Mobiauto - FIPE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component='div'
      >
        <Box
          component='div'
          textAlign='center'
        >
          <Box 
            component='h1'
            fontSize='32px'
          >Tabela Fipe</Box>
          <h2>Consulte o valor de um veículo de forma gratuita</h2>
        </Box>
        <Box 
          component='div'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          gap={2}
        >
          <SelectInputMarca 
            id="marca"
            label="Marca"
            value={values.marca}
            onChange={(e) => handleChange(e.target.value, 'marca')}
          />
          <SelectInputModelo 
            id="modelo"
            label="Modelo"
            value={values.modelo}
            onChange={(e) => handleChange(e.target.value, 'modelo')}
            marcaId={values.marca}
          />
          <SelectInputAno 
            id="ano"
            label="Ano"
            value={values.ano}
            onChange={(e) => handleChange(e.target.value, 'ano')}
            marcaId={values.marca}
            modeloId={values.modelo}
          />
        </Box>
        <Box 
          component='div'
          display='flex'
          justifyContent='center'
          pt={2}
        >
          <Link href='/resultado' passHref>
            <Button
              variant='contained'
              disabled={!(values.marca && values.modelo && values.ano)}
              color='primary'
            >Consultar preço</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
