import React, { createContext, useState } from 'react';
const EditbleStateContext = createContext();

const EditbleStateProvider = ({ children }) => {
    const [editable,seteditable] = useState(false)
  
  return (
    <EditbleStateContext.Provider value={{ editable, seteditable }}>
      {children}
    </EditbleStateContext.Provider>
  );
};

export { EditbleStateContext, EditbleStateProvider };
