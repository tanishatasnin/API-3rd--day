const lodeUsers=()=>{
               fetch('https://jsonplaceholder.typicode.com/users')
               .then(res=>res.json())
               .then(data=>displayusers(data))
}
//lodeUsers();

 const displayusers=data=>{
                              const ul =document.getElementById('users');
                              for(const user of data ){
                                // console.log(user.name);
                                const li=document.createElement('li');
                                li.innerText=`name of users:${user.name}  email id : ${user.email}`;
                                ul.appendChild(li);
                              }}

const lodeComent=()=>{
               fetch('https://jsonplaceholder.typicode.com/comments')
               .then(res=>res.json())
               .then(data=>displyComent(data));

}
lodeComent();
const displyComent=(comment)=>{
               const div =document.getElementById('comments')
               for(const user of comment){
                              const li=document.createElement('li')
               li.innerText=`${user.body}`
               div.appendChild(li);
               }
               
}






// function dataUsers(){
//                fetch('https://jsonplaceholder.typicode.com/users')
//                .then(res=>res.json())
//                .then(data=>displayusers(data))
//              }
// function displayusers(data){
//                const ul =document.getElementById('users');
//                for(const user of data ){
//                  // console.log(user.name);
//                  const li=document.createElement('li');
//                  li.innerText=`name of users:${user.name}  email id : ${user.email}`;
//                  ul.appendChild(li);
//                }}