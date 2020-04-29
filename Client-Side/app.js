
const form = document.querySelector('form');
const loading = document.querySelector('.loading');

loading.style.display = 'none';

let API_URL = 'http://localhost:5000/tweets'

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const tweetObj = {
        name, 
        content,
    }

    form.style.display = 'none'
    loading.style.display = ''

    fetch(API_URL,{ 
        method: 'POST', 
        body: JSON.stringify(tweetObj), 
        headers : 
            {
                'content-type': 'application/json' 
            }  
        }
        ).then(response => response.json())
        .then(createdTweets => {
            console.log(createdTweets);
            form.reset();
            form.style.display = '';
            loading.style.display = 'none';
        });
}) 