window.onload = function() {
    const savedText = localStorage.getItem('editorContent');
    document.getElementById('editor').value = savedText || '';
};

document.getElementById('editor').addEventListener('input', function() {
    localStorage.setItem('editorContent', this.value);
});