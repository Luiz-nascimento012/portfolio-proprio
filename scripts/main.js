const botao = document.getElementById('dark-mode');
const body = document.body;

// Verifica se já existe preferência salva
if (localStorage.getItem('tema') === 'escuro') {
  body.classList.add('escuro');
}

// Alterna tema e salva no localStorage
botao.addEventListener('click', () => {
  body.classList.toggle('escuro');

  if (body.classList.contains('escuro')) {
    localStorage.setItem('tema', 'escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>'
  } else {
    localStorage.setItem('tema', 'claro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>'
  }
});