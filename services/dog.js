import map from './map'

const list = () =>
  map
    .dog({
      url: '/breeds/list/all',
      method: 'get'
    })
    .then(response => response)
    .catch(response => response.response)

const img = ({ raca }) =>
  map
    .dog({
      url: `/breed/${raca}/images/random`,
      method: 'get'
    })
    .then(response => response)
    .catch(response => response.response)

export default {
  list,
  img
}
