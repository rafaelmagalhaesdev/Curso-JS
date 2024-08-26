function verificar(){
    // teste para ver se funcionou window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear() //Ano atual
    var fano = document.getElementById('txtano') //Vai ser o ano que inseri no formulario
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homemcriança.jpg')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mulhercriança.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}