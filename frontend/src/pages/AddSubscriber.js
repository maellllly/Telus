import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { addSubscriber } from '../Service/api'
import { useNavigate } from 'react-router-dom'

function AddSubscriber() {
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    phonenumber: '',
    username: '',
    password: '',
    password2: '',
    domain: '',
    status: '',
    provisioned: '',
    destination: '',
  })

  const {
    phonenumber,
    username,
    password,
    password2,
    domain,
    status,
    provisioned,
    destination,
  } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else if (
      !phonenumber ||
      !username ||
      !password ||
      !destination ||
      !status ||
      !provisioned
    ) {
      toast.error('Kindly fill up all the required fields')
    } else {
      const userData = {
        phonenumber,
        username,
        password,
        domain,
        status,
        provisioned,
        destination,
      }

      await addSubscriber(userData)

      toast.success('Added Successfully')

      navigate(`/ims/viewSubscriber/${phonenumber}`)
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Add New Subscriber
        </h1>
        <p>Please add a new subscriber</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>
              Phone Number: <span className='required'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='phonenumber'
              name='phonenumber'
              value={phonenumber}
              placeholder='Enter phone number'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label>
              Username: <span className='required'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              placeholder='Enter username'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label>
              Password: <span className='required'>*</span>
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label>
              Confirm Password: <span className='required'>*</span>
            </label>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label>
              Domain: <span className='required'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='domain'
              name='domain'
              value={domain}
              placeholder='Enter domain'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label>
              Destination: <span className='required'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='destination'
              name='destination'
              value={destination}
              placeholder='Enter destination'
              onChange={onChange}
            />
          </div>
          <div className='form-control'>
            <h3>Call Forward No Reply</h3>
            <label>
              Status <span className='required'>*</span>
            </label>
            <br></br>
            ACTIVE{' '}
            <input
              type='radio'
              name='status'
              value='ACTIVE'
              onChange={onChange}
            ></input>
            IN-ACTIVE{' '}
            <input
              type='radio'
              name='status'
              value='IN-ACTIVE'
              onChange={onChange}
            ></input>
          </div>

          <div className='form-control'>
            <label>
              Provisioned <span className='required'>*</span>
            </label>
            <br></br>
            TRUE{' '}
            <input
              type='radio'
              name='provisioned'
              value='TRUE'
              onChange={onChange}
            ></input>
            FALSE{' '}
            <input
              type='radio'
              name='provisioned'
              value='FALSE'
              onChange={onChange}
            ></input>
          </div>
          <br></br>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddSubscriber
