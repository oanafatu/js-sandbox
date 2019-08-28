document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

  const numberOfJokes = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.icndb.com/jokes/random/${numberOfJokes}`, true)
  xhr.onload = function () {

    if (this.status === 200) {
      let output = '';
      const response = JSON.parse(this.responseText);
      if (response.type === 'success') {
        
          response.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
          })
       
      } else {
        output += '<li>Something went wrong</li>' 
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();

  e.preventDefault(e);
}