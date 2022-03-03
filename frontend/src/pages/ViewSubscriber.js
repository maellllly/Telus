import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { editSub, getSub } from '../Service/api'
import { FaUser } from 'react-icons/fa'

function ViewSubscriber() {
  const [subs, setSubs] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getSubscriber()
  }, [])

  const getSubscriber = async () => {
    let response = await getSub(id)
    setSubs(response.data)
  }

  //   const onValueChange = (e) => {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     }))
  //   }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> View Subscriber
        </h1>
        <p>View the details of the subscriber</p>
      </section>

      <section className='form'>
        {subs.length > 0 ? (
          <div className='viewSubs'>
            {subs.map((subs) => (
              <div key={subs._id}>
                <div className='form-group'>
                  <label>Phone Number:</label>
                  <input
                    type='text'
                    className='form-control'
                    id='phonenumber'
                    name='phonenumber'
                    value={subs.phonenumber}
                    disabled
                  />

                  <div className='form-group'>
                    <label>Username:</label>
                    <input
                      type='text'
                      className='form-control'
                      id='username'
                      name='username'
                      value={subs.username}
                      disabled
                    />
                  </div>

                  <div className='form-group'>
                    <label>Password:</label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      name='password'
                      value={subs.password}
                      disabled
                    />
                  </div>

                  <div className='form-group'>
                    <label>Domain:</label>
                    <input
                      type='text'
                      className='form-control'
                      id='domain'
                      name='domain'
                      value={subs.domain}
                      disabled
                    />
                  </div>

                  <div className='form-group'>
                    <label>Destination:</label>
                    <input
                      type='text'
                      className='form-control'
                      id='destination'
                      name='destination'
                      value={subs.features[0].callForwardNoReply.destination}
                      disabled
                    />
                  </div>
                  <div className='form-control'>
                    <h4>Call Forward No Reply</h4>
                    <h4>Status</h4>
                    <h4
                      className={
                        subs.status == 'ACTIVE'
                          ? 'background-green'
                          : 'background-red'
                      }
                    >
                      {subs.status}
                    </h4>

                    <h4>Provisioned</h4>
                    <h4
                      className={
                        subs.features[0].callForwardNoReply.provisioned ==
                        'TRUE'
                          ? 'background-green'
                          : 'background-red'
                      }
                    >
                      {subs.features[0].callForwardNoReply.provisioned}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>Subscriber doesn't exist</h3>
        )}
      </section>
    </>
  )
}

export default ViewSubscriber
