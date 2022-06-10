import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import ProjectDetail from './components/Projects/ProjectDetail';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';

function App() {
  return (

    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-12">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='project/:projectId' element={<ProjectDetail></ProjectDetail>}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
