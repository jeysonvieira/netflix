window.onload = function(){

    const botao1 = document.getElementById('botao01')
    const botao2 = document.getElementById('botao02')

    const email1 = document.getElementById('email01')
    const email2 = document.getElementById('email02')

    botao1.addEventListener("click", teste)
    botao2.addEventListener("click", teste)

    function teste(){

        var valor1 = email1.value
        var valor2 = email2.value
        
        const lista = [
            "jeysonsaraiva@gmail.com",
            "jeysonvieira@gmail.com",
            "jeysonjeyson@gmail.com"
        ]

        var contador = 0
        do{

            if(valor1 == lista[contador] || valor2 == lista[contador]){
                console.log(valor1)
                console.log(valor2)
            
            }

            contador++

        
        }while(contador < lista.length)




    }

    
}