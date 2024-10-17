window.onload = function() {
    const savedText = localStorage.getItem('editorContent');
    if(savedText) {
        document.getElementById('editor').value = savedText;
    }
};

document.getElementById('editor').addEventListener('input', function() {
    localStorage.setItem('editorContent', this.value);
});