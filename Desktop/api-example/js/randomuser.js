const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
    }

    const displayUsers = users =>{
      const userContainer = document.getElementById('users-container');
      for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3>User name: ${user.name.title} ${user.name.first} ${user.name.last}  </h3>
        <p>Email: ${user.email} </p>
        <p>User Location: ${user.location.city} ${user.location.country} </p>
        `;

        userContainer.appendChild(userDiv)
      }
    }

    loadUsers();
