export const userType = {
  email: {
    type: 'string',
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: { 
    type: 'string',
    regex: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  }
}