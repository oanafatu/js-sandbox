const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts', (error, posts) => {
  if (error) {
    console.log(error)
  } else {
    console.log(JSON.parse(posts));
  }
})

http.get('https://jsonplaceholder.typicode.com/posts/1', (error, post) => {
  if (error) {
    console.log(error)
  } else {
    console.log(JSON.parse(post));
  }
})

const data = {
  title: 'Custom post',
  body: 'This is a custom post'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, (error, post) => {

  if (error) {
    console.log(error)
  } else {
    console.log(JSON.parse(post));
  }
})

http.put('https://jsonplaceholder.typicode.com/posts/1', data, (error, post) => {

  if (error) {
    console.log(error)
  } else {
    console.log(JSON.parse(post));
  }
})

http.delete('https://jsonplaceholder.typicode.com/posts/1', (error, response) => {
  if (error) {
    console.log(error)
  } else {
    console.log(response);
  }
})