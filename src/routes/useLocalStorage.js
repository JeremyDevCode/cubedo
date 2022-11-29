import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const {
    storageChange,
    error,
    loading,
    item,
  } = state;

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item});
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item});
  const onsynchronize = () => dispatch({ type: actionTypes.synchronize,});


    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
      
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }

          onSuccess(parsedItem);

        } catch(error) {

          onError(error);

        }
      }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storageChange]);
    

    window.addEventListener('storage', (change) => {
      if(change.key === 'TODOS_V1' || change.key === 'TODOS_DELETE') {
          onsynchronize();
      }
    })

    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        onSave(newItem); 
      } catch(error) {
        onError(error);
      }
    }

    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  const initialState = ({ initialValue }) => ({
    loading: true,
    error: false,
    item: initialValue,
    storageChange: false,
  })

  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    synchronize: 'SYNCHRONIZE',
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
      error: true,
    },
    [actionTypes.success]: {
      ...state,
      error: false,
      loading: false,
      storageChange: false,
      item: payload,
    },
    [actionTypes.save]: {
      ...state,
      error: false,
      loading: false,
      storageChange: false,
      item: payload,
    },
    [actionTypes.synchronize]: {
      ...state,
      storageChange: true,
      loading: true,
    }
  })

  const reducer = (state, action) => {
    return  reducerObject(state, action.payload)[action.type] || state;
  }

  export { useLocalStorage };