import { MainScreen } from './Pages/main-page';
import { EditPage } from './Pages/edit-page';
import { Route, Routes } from 'react-router-dom';
import { NoFields } from './Pages/no-fields';
import { DownloadPage } from 'Pages/download-page';
import React from 'react';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainScreen />} />
      <Route path='edit' element={<EditPage />} />
      <Route path='no-fields' element={<NoFields />} />
      <Route path='download-page' element={<DownloadPage />} />
    </Routes>
  );
}

export default App;
