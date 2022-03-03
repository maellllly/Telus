import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { editSub, getSub } from '../Service/api'
import { FaUser } from 'react-icons/fa'

function AddSubscriber() {
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

  const { id } = useParams()

  useEffect(() => {
    loadSubscriberDetails()
  }, [])

  const loadSubscriberDetails = async () => {
    const response = await getSub(id)
    setFormData(response.data)
    console.log(setFormData)
  }

  const onValueChange = (e) => {
    console.log(e.target.value, '2')
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Edit Subscriber
        </h1>
        <p>Edit the details of the subscriber</p>
      </section>

      <section className='form'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='phonenumber'
              name='phonenumber'
              value={phonenumber}
              placeholder='Enter phone number'
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              placeholder='Enter username'
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='domain'
              name='domain'
              value={domain}
              placeholder='Enter domain'
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='destination'
              name='destination'
              value={destination}
              placeholder='Enter destination'
              onChange={(e) => onValueChange(e)}
            />
          </div>
          <div className='form-control'>
            <h3>Call Forward No Reply</h3>
            <label>Status</label>
            <br></br>
            ACTIVE{' '}
            <input
              type='radio'
              name='status'
              value='ACTIVE'
              onChange={(e) => onValueChange(e)}
            ></input>
            IN-ACTIVE{' '}
            <input
              type='radio'
              name='status'
              value='IN-ACTIVE'
              onChange={(e) => onValueChange(e)}
            ></input>
          </div>

          <div className='form-control'>
            <label>Provisioned</label>
            <br></br>
            TRUE{' '}
            <input
              type='radio'
              name='provisioned'
              value='TRUE'
              onChange={(e) => onValueChange(e)}
            ></input>
            FALSE{' '}
            <input
              type='radio'
              name='provisioned'
              value='FALSE'
              onChange={(e) => onValueChange(e)}
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
