const http = new EasyHTTP2;

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then (data => console.log(data))
//   .catch (err => console.log(err))

const userData = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
} 

// http.post('https://jsonplaceholder.typicode.com/users', userData)
//   .then (data => console.log(data))
//   .catch(err => console.log(err))


  
// http.put('https://jsonplaceholder.typicode.com/users/2', userData)
//   .then (data => console.log(data))
//   .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then (data => console.log(data))
.catch(err => console.log(err))
