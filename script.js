document.addEventListener("DOMContentLoaded", function() {
    const fileListElement = document.getElementById('fileList');

    // Имитация файловой системы
    const files = [
        { name: 'file1.txt', isDir: false, path: 'uploads/file1.txt' },
        { name: 'file2.jpg', isDir: false, path: 'uploads/file2.jpg' },
        { name: 'documents/', isDir: true, path: 'uploads/documents' },
    ];

    files.forEach(file => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (file.isDir) {
            a.href = '#'; // В данном примере ссылки на директории не работают
            a.textContent = `${file.name}`;
        } else {
            a.href = file.path;
            a.textContent = file.name;
        }

        li.appendChild(a);
        fileListElement.appendChild(li);
    });
});
