//manipulation do DOM

//dps de carregar la pagina

document.addEventListener("DOMContentLoaded", function(){

    //captura o formulario pelo ID
    const form = document.getElementById("formulario")

    //captura elemento onde será exibida a mensagem 
    const mensagem = document.getElementById("mensagem")

    //adiciona o evento de submissão ao formulário
    form.addEventListener("submit", function(event){
        event.preventDefault() //evita carregamento de pagina

        //captura os valores dos campos.
        const nome = document.getElementById("nome").value.trim()
        const email = document.getElementById("email").value.trim()
        const idade = document.getElementById("idade").value.trim()
        const profissao = document.getElementById("profissao").value.trim()


        //validação simples dos campos obrigatorios
        if (nome === "" || email === ""){
            mensagem.innerText="Por favor, preencha os campos obrigatórios"
            mensagem.style.color = "red"
            return
        }

        //se tudo tiver certin, mostra mensagem de certin
        mensagem.innerText =`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail:${email}\nIdade:${idade || "Não informado"}\nProfissão:${profissao}`
        mensagem.style.color = "blue"
        console.log(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail:${email}\nIdade:${idade || "Não informado"}\nProfissão:${profissao}`)

        //limpa formulario
        form.reset()
    })
    })