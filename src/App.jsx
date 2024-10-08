import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MatchDetails from './pages/MatchDetails';
import TeamDetails from './pages/TeamDetails';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/match-details/:matchID' element={<MatchDetails />} />
        <Route
          path='/match-details/:matchID/team-details/:teamID'
          element={<TeamDetails />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
