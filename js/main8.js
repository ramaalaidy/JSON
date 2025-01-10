const username = 'ramaalaidy';
const url = `https://api.github.com/users/${ramaalaidy}/repos`;

fetch(url)
  .then(response => response.json())  
  .then(repos => {

    repos.forEach(repo => {
      console.log(repo.name);  
    });
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });
