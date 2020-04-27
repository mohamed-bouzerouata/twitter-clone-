
const form = document.querySelector('form');
const loading = document.querySelector('.loading');

loading.style.display = 'none';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const tweetObj = {
        name, 
        content,
    }
    console.log(tweetObj);
    loading.style.display = '';
    form.style.display = 'none';

})