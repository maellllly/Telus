import axios from 'axios'

const API_URL = '/ims/subscriber/'
// const API_URL = 'http://localhost:5000/ims/subscriber/'

//Get all Subscribers
export const getAllSubs = async () => {
  return await axios.get(API_URL)
}

//Get Specific Subscriber
export const getSub = async (id) => {
  return await axios.get(`${API_URL}/${id}`)
}

export const addSubscriber = async (userData) => {
  const response = await axios.post(API_URL, userData)

  return response.data
}

export const deleteSub = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`)

  return response.data
}

export const editSub = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data)
}
