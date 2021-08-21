const input = document.getElementById('file-upload');
const infoArea = document.getElementById('file-upload-filename');

input.addEventListener( 'change', showFileName );

function showFileName(event) {

    const input = event.srcElement;

    const fileName = input.files[0].name;

    infoArea.textContent = 'File name ' + fileName;



}