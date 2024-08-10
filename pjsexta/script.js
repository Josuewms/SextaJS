function clickMe()
{
    //alert('siiiuuuu')  
    //console.log("Teste do console")

    // o get.ElementByid serve para pegar elementos HTML atraves do ID
    // usando o .innerText você consegue pegar só o conteúdo dentro do ID ao invés do ID todo
        console.log(document.getElementById("title"))
        console.log(document.getElementById("title").innerText)
        
    //Busca todos os elementso q tenha a class text
    //Retorna uma lista (array)
    //a primeira posição do array começa sempre no zero
        console.log(document.getElementsByClassName('text'))
        console.log(document.getElementsByClassName('text')(1))
        


}

// é assim que faz comentário dentro do script
