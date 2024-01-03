export default function getNeighborhoodsList () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square']
  /* eslint-disable no-unused-vars */
  const self = this
  const add = (this.addNeighborhood = newNeighborhood => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood)
    return self.sanFranciscoNeighborhoods
  })
  /* eslint-disable no-unused-vars */
}
