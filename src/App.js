import { MainScreen } from './Pages/main-page';
import { EditPage } from './Pages/edit-page';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainScreen />} />
      <Route path='edit' element={<EditPage />} />
    </Routes>
  );
}

export default App;
