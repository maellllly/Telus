import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Subscribers</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>
            <FaSignInAlt /> Subscriber List
          </Link>
        </li>
        <li>
          <Link to='/addSubscriber'>
            <FaUser /> Add Subscriber
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
