import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import AddSubscriber from './pages/AddSubscriber'
import Subscriber from './pages/Subscriber'
import EditSubscriber from './pages/EditSubscriber'
import ViewSubscriber from './pages/ViewSubscriber'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Subscriber />} />
            <Route path='/addSubscriber' element={<AddSubscriber />} />
            <Route exact path='/editSub/:id' element={<EditSubscriber />} />
            <Route
              exact
              path='/ims/viewSubscriber/:id'
              element={<ViewSubscriber />}
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
