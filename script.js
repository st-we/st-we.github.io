document.getElementById('cracha').addEventListener('submit', function (e) {
    e.preventDefault();

    var cpd = document.getElementById('cpd').value;
    document.getElementById('displayCPD').textContent = cpd;

    var fileInput = document.getElementById('foto');
    var displayFoto = document.getElementById('displayFoto');

    if (fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            displayFoto.src = e.target.result;
            displayFoto.style.display = "block";
        }
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        displayFoto.style.display = "none";
    }
});

function updateFileName() {
    const fileInput = document.getElementById('foto');
    const fileText = document.getElementById('displayFileName');
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'Nenhum arquivo selecionado';
    fileText.textContent = fileName;
}

function printContent(el) {
    var restorepage = document.body.innerHTML;
    var printcontent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printcontent;
    window.print();
    document.body.innerHTML = restorepage;
}