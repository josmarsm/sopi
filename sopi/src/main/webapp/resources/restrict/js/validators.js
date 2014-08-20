/**
 * Verifica se o valor do objeto passado e um numero inteiro com digitos compreendidos
 * entre o intervalo de 0 a 9.
 * @param obj do qual sera verificado o valor.
 */
function checkInteger(obj) {
    var valor = obj.value;
    var inteiro = new RegExp("[0-9]");
    for (var i = 0; i < valor.length; i++) {
        if (!inteiro.test(valor.charAt(i))) {
            valor = valor.substring(0, i) + valor.substring(i + 1, valor.length);
            i = -1;
        }
        /*Condi��o para permitir as setas do teclado no IE*/
//        else if (isLeftArrowPressed(event) || isRightArrowPressed(event)){
//            return;
//        }
    }
    obj.value = valor;
}

/**
 * Verifica se o numero de caracteres digitados nao ultrapassou o limite permitido e informa
 * o numero de caracteres restantes que poderao ser digitados.
 * @param textArea element no qual serao digitados os caracteres.
 * @param contadorSpan nome do span onde sera exibido a mensagem informando o numero de caracteres restantes.
 * @param tamanhoMaximoPermitido valor maximo de caracteres permitidos no textArea passado.
 */
function contaCaracteres(textArea, contadorSpan, tamanhoMaximoPermitido) {
    var stringDigitada = textArea.value;
    stringDigitada  = stringDigitada.replace(/\r/, '');
    if (stringDigitada.length > tamanhoMaximoPermitido){
        stringDigitada = stringDigitada.substring(0, tamanhoMaximoPermitido);
        textArea.value = stringDigitada;
    }
    setContent(contadorSpan, 'Restam '  + (tamanhoMaximoPermitido  - stringDigitada.length) + ' caracteres');
}

//-->