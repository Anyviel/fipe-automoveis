import React from 'react';
import { 
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Autocomplete,
  TextField
} from '@mui/material';
import { useFetch } from '../../hooks/useFetch';

interface ISelectProps{
  id: string,
  label: string,
  value: string | number,
  onChange: (any: any) => void,
}

const SelectInputMarca = ({ id, label, value, onChange }: ISelectProps) => {

  const {data, error, request} = useFetch();

  React.useEffect(() => {
    const URL = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
    request(URL);
  }, [request])

  return (
  <>
    {error && <div>Ocorreu um Erro.</div>}
    {!error && (
      <FormControl fullWidth variant="filled">
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={id}
          value={value}
          onChange={onChange}
          disableUnderline
        >
          <MenuItem value="" disabled>
            <em>Selecione uma Marca</em>
          </MenuItem>
          {data?.map((option: any) => (
            <MenuItem key={option?.codigo} value={option?.codigo}>
              {option?.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
  </>
  )
};

export default SelectInputMarca;
