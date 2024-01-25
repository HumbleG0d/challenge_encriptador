const textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', e => {
    textarea.style.height = 'auto';    
    let heigth = e.target.scrollHeight;
    textarea.style.height = `${heigth}px`;
})
