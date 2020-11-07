const getData = () => {
  fetch('http://localhost:80/crovex/Crovex/HTML/storage/testApi.php', {
    method: 'POST',
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

export default getData;
