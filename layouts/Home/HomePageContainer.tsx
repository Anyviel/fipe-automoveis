import React from 'react';
import HomePage from './HomePage';
import { useSelectContext } from '../../context/SelectContext';
import { createStyles } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  boxShadow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px rgba(0,0,0,.5)',
    borderRadius: '4px'
  },
  bgColor: {
    backgroundColor: '#eee'
  }
}))

const HomePageContainer = () => {

  const { values, handleChange }: any = useSelectContext();

  return <HomePage values={values} handleChange={handleChange} useStyles={useStyles} />;
};

export default HomePageContainer;
