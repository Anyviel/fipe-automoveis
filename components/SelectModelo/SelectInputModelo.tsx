import React from 'react';
import { 
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@mui/material';
import { useFetch } from '../../hooks/useFetch';

interface ISelectProps{
  id: string,
  label: string,
  value: string | number,
  onChange: (any: any) => void,
  marcaId: string
}

const SelectInputModelo = ({ id, label, value, onChange, marcaId }: ISelectProps) => {

  const {data, error, request} = useFetch();

  React.useEffect(() => {
    if (marcaId) {
      const URL = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
      request(`${URL}/${marcaId}/modelos`);
    }
  }, [marcaId, request])

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
          disabled={!marcaId}
        >
          <MenuItem value="" disabled>
            <em>Selecione um Modelo</em>
          </MenuItem>
          {!error && data?.modelos?.map((option: any) => (
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

export default SelectInputModelo;
