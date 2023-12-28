    const Calculadora = {
    soma: (num1 : number, num2 : number) => {
        let res = num1 + num2
        alert(num1+' + '+num2+' = '+res)
    },
    sub: (num1:number, num2:number) => {
        let res = num1 - num2
        alert(num1+' - '+num2+' = '+res)
    },
    mul: (num1:number, num2:number) => {
        let res = num1 * num2
        alert(num1+' * '+num2+' = '+res)
    },
    div: (num1:number, num2:number) => {
        let res = num1 / num2
        alert(num1+' / '+num2+' = '+res)
    },
    ele: (num1:number, num2:number) => {
        let res = num1 ** num2
        alert(num1+' ^ '+num2+' = '+res)
    },
    por: (num1:number, num2:number) => {
        let res = num1 % num2
        alert(num1+' % '+num2+' = '+res)
    },    
}

function calcular() {
    try {
        let num1 = receberNum()
        console.log(num1)
        let num2 = receberNum()
        console.log(num2)
        let resp = receberOper()
        console.log(resp)

        switch (resp) {
            case 'mais':
                Calculadora.soma(num1, num2)
                break;
            case 'menos':
                Calculadora.sub(num1, num2)
                break;
            case 'divide':
                Calculadora.div(num1, num2)
                break;
            case 'multiplica':
                Calculadora.mul(num1, num2)
                break;
            case 'eleva':
                Calculadora.ele(num1, num2)
                break;
            case 'porcentaja':
                Calculadora.por(num1, num2)
                break;
        
            default:
                console.log('Não')
                break;
        }
    } catch (error) {
        erro(error)
    }
}

function receberNum() {
    let num = Number(prompt('Digite um número: '))
    if(num == null || Number.isNaN(num) == true){
        return receberNum()
    }else{
        return num
    }
}

function receberOper() {
    let oper : string = String(prompt('Digite o que você quer fazer?'+'\nMais, menos, divide, multiplica, eleva ou porcentaja')).toLowerCase()
    if (oper == null){
        return receberOper()
    }else{
        return oper
    }
}

function erro(error : Error) {
    throw {
        nome: error.name,
        desc: error.message,
        data: new Date
    }
}

calcular()
