let estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
  const livroExistente = estoque.find(livro => livro.titulo === titulo);

  if (livroExistente) {
    console.log(`O livro "${titulo}" já está no estoque.`);
  } else {
    estoque.push({ titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado ao estoque.`);
  }
}

function removerLivro(titulo) {
  const index = estoque.findIndex(livro => livro.titulo === titulo);

  if (index !== -1) {
    estoque.splice(index, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoque.find(livro => livro.titulo === titulo);

  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

function listarLivros() {
  if (estoque.length === 0) {
    console.log("O estoque está vazio.");
  } else {
    console.log("Livros disponíveis no estoque:");
    for (let i = 0; i < estoque.length; i++) {
      const livro = estoque[i];
      console.log(`- ${livro.titulo} | Autor: ${livro.author} | Quantidade: ${livro.quantidade}`);
    }
  }
}