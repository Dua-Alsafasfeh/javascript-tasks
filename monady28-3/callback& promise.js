const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.map((post, index) => {
//             output += <li>${post.title}</li>;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function creatPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }
// getPosts();
// creatPost({ title: 'Post Three', body: 'this is post three' }, getPosts)


//*************************************************************************/
function getPosts() {
    return new Promise((resolve,rejest)=>{
      resolve (setTimeout(() => {
          let output = '';
           posts.map((post, index) => {
              
                  (output += `<li>${post.title}</li>`);
          });
           document.body.innerHTML = output;
      }), 1000)
    
    rejest(Error('bad'))
  })} 
  
  function creatPost(post, callback) {
      return new Promise((resolve,rejest)=>{
        resolve(setTimeout(() => {
              posts.push(post);
              callback();
          }, 2000))
          rejest(Error('bad')) ;
      })
     
  }
  getPosts().then(
      (result)=>console.log(result),
      (error)=>console.log(error)
  );
  creatPost({ title: 'Post Three', body: 'this is post three' }, getPosts).then(
      (result)=>console.log(result),
      (error)=>console.log(error)
  );
  