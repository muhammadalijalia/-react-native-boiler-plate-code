import React, {useState, useCallback} from 'react';

export const useMergeState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => Object.assign({}, prevState, newState));
  return [state, setMergedState];
};

export const useComponentSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(event => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  }, []);

  return [size, onLayout];
};
