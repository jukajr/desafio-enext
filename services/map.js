import axios from 'axios'

const instance = {
  dog: axios.create({
    baseURL: 'https://dog.ceo/api'
  })
}

export default instance
