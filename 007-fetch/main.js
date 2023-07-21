const log = console.log;
fetch('https://api.github.com/users')
    .then(res =>  res.json())
    .then((data) => {
        log(data)



        
    });