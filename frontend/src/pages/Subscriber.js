import { useState, useEffect } from 'react'
import { getAllSubs, deleteSub } from '../Service/api'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Subscriber() {
  const [subs, setSubs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllSubscribers()
  }, [])

  const deleteSubData = async (id) => {
    const res = await deleteSub(id)
    toast.success(res.message)
    getAllSubscribers()
  }

  const getAllSubscribers = async () => {
    let response = await getAllSubs()
    setSubs(response.data)
  }

  return (
    <>
      <section className='content'>
        {subs.length > 0 ? (
          <div className='subs'>
            {subs.map((subs) => (
              <div className='sub' key={subs._id}>
                <h2>{subs.phonenumber}</h2>
                <h2>{subs.username}</h2>
                <h2
                  className={
                    subs.status == 'ACTIVE'
                      ? 'background-green'
                      : 'background-red'
                  }
                >
                  {subs.status}
                </h2>
                <div className='form-group'>
                  <center>
                    <Link to={`/ims/viewSubscriber/${subs.phonenumber}`}>
                      <button type='button' className='btn'>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </center>
                </div>
                <button
                  onClick={() => deleteSubData(subs._id)}
                  className='close'
                >
                  X
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h3>You have not set any Subscribers</h3>
        )}
      </section>
    </>
  )
}

export default Subscriber
