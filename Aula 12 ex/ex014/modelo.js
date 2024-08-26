function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date(); // Aqui pega a data de hoje
    var hora = data.getHours(); // Aqui pega a hora atual 
    msg.innerHTML = `Agora são ${hora} horas.`; // Aqui mostra a msg na tela
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'manha.jpg';
        document.body.style.background = '#C2CCCE'
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'tarde.jpg';
        document.body.style.background = '#FFC756'
    } else {
        // Boa noite
        img.src = 'noite.jpg';
        document.body.style.background = '#2E2E35'
    }
}
