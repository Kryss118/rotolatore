import axios from 'axios';

export default axios.create({
  baseURL:  'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer j_dh7IYiInPmGAXHPln7NB5zsyyizzHTPNzbR8sZ7AZEBCsb_0ZYbbbJxqPg3XDkkLEEPO6pEciqqsc7yElIlrQwrIGnuKr1zmFFJCLHRrqbgCQvz8vp7Ek3ZKZOY3Yx'
  }
})