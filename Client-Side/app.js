// const form = document.querySelector('form');
// const loading = document.querySelector('.loading');
// const tweets = document.querySelector('.loading')
// loading.style.display = 'none';

// let API_URL = 'http://localhost:5000/tweets'

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const content = formData.get('content');

//     const tweetObj = {
//         name, 
//         content,
//     }

//     form.style.display = 'none'
//     loading.style.display = ''

//     fetch(API_URL,{ 
//         method: 'POST', 
//         body: JSON.stringify(tweetObj), 
//         headers : 
//             {
//                 'content-type': 'application/json' 
//             }  
//         }
//         ).then(response => response.json())
//         .then(createdTweets => {
//             console.log(createdTweets);
//             form.reset();
//             form.style.display = '';
//             loading.style.display = 'none';
//         });
// }) 

// fetch(API_URL) 
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     data.reverse();
//     data.forEach(el => {
//         const div = document.createElement('div');
//         const header = document.createElement('h3');
//         header.textContent = el.name;

//         const content = document.createElement('p');
//         content.textContent = el.content;
        
//         const date = document.createElement('small');
//         date.textContent = new Date(el.createdTweets);
        
//         div.appendChild(header);
//         div.appendChild(content);
//         div.append(data); 
        
//         tweets.appendChild(div)
//     });
// })


const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const API_URL = 'http://localhost:4000/tweets';

loading.style.display = 'none';


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');
    const obj = {
        name,
        content,
    };
    form.style.display = 'none';
    loading.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    // .then((createdTweets) => {
    //     console.log(createdTweets)
    // })
    
})


