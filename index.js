// Add your code here
function submitData(name, email){
   return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: { 
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({name, email})
    })
        .then((response) => response.json())
         .then((obj) => {console.log(obj)
            const appendedId = document.createElement('p').textContent = obj.id
            document.body.append(appendedId)})
         .catch((error) => {
             const appendedError = document.createElement('p').textContent = error
             //appendedError.append(error)
            document.body.append(appendedError)
         })
}

        
        
    
        
// fetch(`http://localhost:3000/users/${obj.id}`,{
//     method: 'PATCH',
//     headers: {
//         "content-type": "application/json",
//         "accept": "application/json"
// },
// body: JSON.stringify({name, email})
// })
// .then(res => res.json())
// .then(obj => console.log(obj))
