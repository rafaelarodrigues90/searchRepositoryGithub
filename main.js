var listEl = document.querySelector('ul');
var inputEl = document.querySelector('input');
var nameElement = document.querySelector('#app');

// request dos repositórios no meu github
function listRepos() {
    var user = inputEl.value;

    if(!user) return;
    
    load();
    username();
    
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepos(response.data);
        })
        .catch(function(error) {
            listEl.innerHTML = '';
            alert('Usuário não encontrado');
        });
    }


// imprimir nome pesquisado
function username(user){
    nameElement.innerHTML = '';
    var user = inputEl.value;
    
    const textEl = document.createTextNode('User repository: ');
    const username = document.createTextNode(user);
    const pElement = document.createElement('p');

    pElement.appendChild(textEl);
    pElement.appendChild(username);
    nameElement.appendChild(pElement);
}


// preencher lista
function renderRepos(repos){
    listEl.innerHTML = '';

    for (repo of repos){
        const repoName = document.createTextNode(repo.name);
        const liEl = document.createElement('li');

        liEl.appendChild(repoName);
        listEl.appendChild(liEl);
    }
}


// carregando requisição
function load(loading) {
    listEl.innerHTML = '';

    const textEl = document.createTextNode('Carregando...');
    const loadingEl = document.createElement('li');

    loadingEl.appendChild(textEl);
    listEl.appendChild(loadingEl);
}


// Tecla enter no input
var input = document.getElementById('myInput');
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();

        document.querySelector('button').click();
    }
});