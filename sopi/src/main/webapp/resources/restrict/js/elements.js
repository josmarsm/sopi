/**
 * Cria um elemento HTML do tipo imagem
 * @param src a localizacao da imagem
 * @param alt a descricao de alt
 * @param title a descricao de title
 */
function createImg(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.title = title;
    return img;
}

/**
 * Cria um elemento input do tipo radio.
 * @param id do radio a ser criado.
 * @param radioName ser� o nome do radio a ser criado.
 */
function createRadioEscolha(id, radioName) {
    var radio;
    try {
        // para IE
        radio = document.createElement('<input name="' + radioName + '" type="radio" id="' + id + '"/>');
    } catch(exception) {
        radio = document.createElement('input');
        radio.name = radioName;
        radio.type = 'radio';
        radio.id = id;
    }
    return radio;
}

/**
 * Cria um elemento input do tipo checkbox.
 * @param id do checkbox a ser criado.
 * @param checkboxName ser� o nome do checkbox a ser criado.
 */
function createCheckbox(id, checkboxName) {
    var checkbox;
    try {
        // para IE
        checkbox = document.createElement('<input name="' + checkboxName + '" type="checkbox" id="' + id + '"/>');
    } catch(exception) {
        checkbox = document.createElement('input');
        checkbox.name = checkboxName;
        checkbox.type = 'checkbox';
        checkbox.id = id;
    }
    return checkbox;
}

/**
 * Cria um elemento input do tipo checkbox.
 * @param id do checkbox a ser criado.
 * @param checkboxName ser� o nome do checkbox a ser criado.
 * @param checkboxValue ser� o valor do checkbox a ser criado.
 * @param checked se existir, o checkbox ser� criado e automaticamente selecionado
 */
function createCheckbox(id, checkboxName, checkboxValue, checked) {
    var checkbox;
    try {
        // para IE
        if (checked){
            checkbox = document.createElement('<input name="' + checkboxName + '" type="checkbox" id="' + id +
                                          '"value = "'+ checkboxValue + '"checked="checked""' + '"/>');
        }else checkbox = document.createElement('<input name="' + checkboxName + '" type="checkbox" id="' + id +
                                          '"value = "'+ checkboxValue +'"/>');
    } catch(exception) {
        checkbox = document.createElement('input');
        checkbox.name = checkboxName;
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.value = checkboxValue;
        checkbox.checked = checked;
    }
    return checkbox;
}
function desabilitaLink(link) {
    var nome = link.innerHTML;
    var span = document.createElement('span');
    span.innerHTML=nome;
    link.parentNode.insertBefore(span, link);
    var url = link.href;
    link.parentNode.removeChild(link);
    setTimeout(function(){createLink(span,url)},15000);
}
function createLink(span,url){
    var a = document.createElement('a');
    a.innerHTML=span.innerHTML;
    a.setAttribute('href', url);
    a.setAttribute('onclick', 'desabilitaLink('+url+')');
    span.parentNode.insertBefore(a, span);
    span.parentNode.removeChild(span);
}
function desabilitaButton(button) {
    setTimeout(function(){desabilita(button)},100);
    return true;
}
function desabilita(button) {
    button.disabled = true;
    setTimeout(function(){button.disabled=false},15000);
}
//-->