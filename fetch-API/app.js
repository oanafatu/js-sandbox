document.getElementById('button1').addEventListener('click', getText);

function getText(){
  fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err))
}

document.getElementById('button2').addEventListener('click', getJSON);

function getJSON(){
  fetch('post.json')
    .then(res => res.json())
    .then(data => {
    
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}: ${post.body}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    }
      )
    .catch(err => console.log(err))
}

document.getElementById('button3').addEventListener('click', getExternal);

function getExternal(){
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
     
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    }
      )
    .catch(err => console.log(err))
}

