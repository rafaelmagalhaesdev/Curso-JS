function contar(){
    let ini = document.getElementById('txti')
    let fim = documento.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        alert('Tudo OK!')
    }
}