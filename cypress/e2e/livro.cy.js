describe('template spec', () => {
    it('passes', () => {

        const livro = {
            "titulo": "O Senhor dos Anéis",
            "autor": "J.J.R. Tolkien",
            "editora": "HarperCollins",
            "anoPublicacao": 1954,
            "numeroPaginas": 1178
          };

       cy.request({
        url: 'http://localhost:5000/api/livros',
        method: 'POST',
        body: livro
       }).then(response => {
        cy.log(response.status)
       })
    })
})
