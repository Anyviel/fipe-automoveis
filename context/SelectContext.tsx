import React from 'react';

const SelectContext = React.createContext({});

const SelectContextProvider: React.FC<any> = ({ children }) => {
  
  const [values, setValues] = React.useState({
    veiculo: 'carros',
    marca: '',
    modelo: '',
    ano: ''
  });

  const [aleatorio, setAleatorio] = React.useState('Aleatório');

  const handleChange = (value: any, name: any) => {
    setValues({...values, [name]: value})
  }

  const value = { values, handleChange, aleatorio, setAleatorio };
  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
};

// eslint-disable-next-line react/display-name
const withSelectContext = (Component: any) => (props: any) => (
  <SelectContextProvider>
    <Component {...props} />
  </SelectContextProvider>
);

const useSelectContext = () => React.useContext(SelectContext);

export {
  SelectContextProvider as default,
  SelectContext,
  useSelectContext,
  withSelectContext,
};