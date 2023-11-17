export class Pausa{

    esperarA(callback){
        const p=document.createElement('p')
        document.body.appendChild(p)

        p.textContent='Pulsa ENTER para continuar'
        p.style.position='absolute'
        p.style.top='500px'
        p.style.left ='500px'
        p.style.color='white'

        window.onkeydown=esperar.bind(this,callback)
        
    }

    pulsar(callback,evento){
        if(evento.code !='Enter') return

        window.onkeydown=null
        callback()
    }

}