import React from 'react';

export const useFetch = () => {

  const [ data, setData ] = React.useState<any>(null);
  const [ error, setError ] = React.useState(null);
  const [ loading, isLoading ] = React.useState(false);

  const request = React.useCallback(async (url) => {
    let response;
    let json;

    try {
      setError(null);
      isLoading(true);

      response = await fetch(url);
      json = await response.json();
    } catch (err: any) {
      json = null;

      setError(err);
    } finally {
      setData(json);
      isLoading(false);
      
      return { response, json };
    }
  }, [])

  return {
    data,
    loading,
    error,
    request
  }
}
