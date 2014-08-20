/**
 * Retorna uma elemento a partir do seu identificador.
 * @param id o identificador do elemento.
 */
function getById(id) {
    return document.getElementById(id);
}

/**
 * Mostra um elemento.
 * @param obj o elemento a ser mostrado.
 */
function show(obj) {
    if (obj != null) obj.style.display = '';
}

function hideShow(obj) {
    if (obj != null) {
        if (obj.style.display == 'none') {
            show(obj);
        } else {
            hide(obj);
        }
    }
}

/**
 * Esconde um elemento.
 * @param obj o elemento a ser escondido.
 */
function hide(obj) {
    if (obj != null) obj.style.display = 'none';
}

/**
 * Mostra um elemento a partir do seu identificador.
 * @param id o identificador do elemento a ser mostrado.
 */
function showById(id) {
    show(getById(id));
}

/**
 * Esconde um elemento a partir do seu identificador.
 * @param id o identificador do elemento a ser escondido.
 */
function hideById(id) {
    hide(getById(id));
}

/**
 * Mostra os elementos a partir do seus identificadores.
 * @param ids o vetor de identificadores dos elemento a serem mostrados.
 */
function showAllById(ids) {
    for (var i = 0; i < ids.length; i++) {
        showById(ids[i]);
    }
}

/**
 * Esconde vários elementos a partir de um vetor de identificadores.
 * @param ids o vetor de identificadores dos elementos a serem escondidos.
 */
function hideAllById(ids) {
    for (var i = 0; i < ids.length; i++) {
        hideById(ids[i]);
    }
}

/**
 * Mostra vários elementos a partir do vetor passado.
 * @param objs o vetor de elementos a serem mostrados.
 */
function showAll(objs) {
    for (var i = 0; i < objs.length; i++) {
        show(objs[i]);
    }
}

/**
 * Esconde vários elementos a partir do vetor passado.
 * @param objs o vetor de elementos a serem escondidos.
 */
function hideAll(objs) {
    for (var i = 0; i < objs.length; i++) {
        hide(objs[i]);
    }
}

/**
 * Atribui "" para a propriedade value de um objeto.
 * @param obj o objeto a ter a sua propriedade limpa.
 */
function clearValue(obj) {
    obj.value = "";
}

/**
 * Atribui "" para a propriedade innerHTML de um objeto.
 * @param id o objeto a ter o seu conteúdo limpo.
 */
function clearContent(id) {
    var element = getById(id);
    if (element != null) {
        element.innerHTML = "";
    }
}

/**
 * Atribui "" para a propriedade innerHTML dos elementos com o id passado.
 * @param ids dos elementos que devem ter seu conteúdo limpo.
 * @see clearContent
 */
function clearAllContent(ids) {
    for (var i = 0; i < ids.length; i++) {
        clearContent(ids[i]);
    }
}

/**
 * Atribui um valor para a propriedade innerHTML de um objeto.
 * @param id o objeto a ter sua propriedade innerHTML atualizada.
 * @param value o valor a ser atribuido para a propriedade innerHTML do objeto.
 */
function setContent(id, value) {
    getById(id).innerHTML = value;
}

/**
 * Atribui "" para a propriedade innerHTML para os objetos dos identificadores passados.
 * @param ids o objeto a ter o seu conteúdo limpo.
 */
function clearAllById(ids) {
    for (var i = 0; i < ids.length; i++) {
        clearContent(ids[i]);
    }
}

/**
 * Atribui "" para a propriedade innerHTML dos objetos passados.
 * @param objs os objetos a ter o seu conteúdo limpo.
 */
function clearValues(objs) {
    for (var i = 0; i < objs.length; i++) {
        clearValue(objs[i]);
    }
}

/**
 * Marca/Desmarca todos os checkboxes identificados pelo nome passado.
 * @param check o checkbox que define se os checkboxes devem ser marcados ou desmarcados.
 * @param elementName o nome dos elementos a serem manipulados.
 */
function checkAll(check, elementName) {
    checkAllBoolean(check.checked, elementName);
}

/**
 * Marca/Desmarca todos os checkboxes identificados pelo nome passado de acordo com o valor passado.
 * @param checked o valor que define se os checkboxes devem ser marcados ou nao.
 * @param elementName o nome dos elementos a serem manipulados.
 */
function checkAllBoolean(checked, elementName) {
    var checkboxes = document.getElementsByName(elementName);
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = checked;
    }
}

/**
 * Se a tecla pressionada for <enter>, chama a função passada.
 * @param event o evento de tecla pressionada.
 * @param funcao a função a ser chamada caso, a tecla pressionada seja <enter>.
 */
function enter(event, funcao) {
    var keycode;
    if (!event) {
        event = window.event;
    }
    keycode = event.which ? event.which : event.keyCode;
    if (keycode == 13) {
        funcao();
    }
}

function localizar(funcao, url, w, h) {
    document.copiarLocalizado = funcao;
    document.retornoLocalizar = null;
    window.open(url, window.name + '_localizar', 'resizable=yes,scrollbars=yes,width=' + w + ',height=' + h);
}

function selecionar(sel, tab, props, hiddenId) {
    if (!sel) return;
    var ind = -1;
    var i;
    var radioSelected;
    if (sel.checked) {
        ind = 0;
        radioSelected = sel;
    } else {
        for (i = 0; i < sel.length; i++) {
            if (sel[i].checked) {
                ind = i;
                radioSelected = sel[i];
            }
        }
    }
    if (ind == -1) {
        alert("Marque uma das opções da lista.");
        return;
    }
    /* Busca todas as linhas que contem os elementos do tipo radio. */
    var lin = document.getElementById(tab).getElementsByTagName("tr");
    /* Busca a linha atraves do indice do input do tipo radio selecionado. */
    var col = lin[ind].getElementsByTagName("td");
    var ret = new Object();
    /* id do objeto selecionado. */
    ret[hiddenId] = radioSelected.id;
    for (i = 0; i < props.length; i++) {
        if (props[i]) {
            ret[props[i]] = col[i].innerHTML;
        }
    }
    window.opener.document.retornoLocalizar = ret;
    window.opener.document.copiarLocalizado();
    window.close();
}

/**
 * @param checkboxes representam um checkbox ou vetor de checkboxes selecionado(s).
 * @param tab nome do nodo pai dos checkboxes.
 * @param props nome dos atributos dos objetos a serem criados.
 * @param hiddenId nome do identificador dos objetos a serem criados que contera
 * o id de cada checkbox selecionado.
 * @param closeWindow indica se sera ou nao fechada a janela apos clicar em selecionar.
 */
function selecionarCheckbox(checkboxes, tab, props, hiddenId, closeWindow) {
    /* Vetor que contera o(s) input(s) do tipo checkbox. */
    var vetor = new Array();
    var i = 0;
    if (checkboxes.type == 'checkbox' && checkboxes.checked) {
        vetor[0] = checkboxes;
    } else {
        for (var t = 0; t < checkboxes.length; t++) {
            /* Insere no vetor os checkboxes selecionados. */
            if (checkboxes[t].checked) {
                vetor[i++] = checkboxes[t];
            }
        }
    }
    /* Vetor de retorno para a pagina 'chamadora'. */
    var ret = new Array();

    /* Para todos os checkboxes selecionados. */
    for (var t = 0; t < vetor.length; t++) {
        var linha = vetor[t].parentNode.parentNode;
        /* Linha da tabela da qual pertence o checkbox. */
        var tds = linha.getElementsByTagName("td");
        var obj = new Object();
        /* Para cada coluna constroi um atributo e seta o seu valor no objeto a ser inserido no
         vetor de retorno. */
        for (i = 0; i < props.length; i++) {
            if (props[i]) {
                obj[props[i]] = tds[i].innerHTML;
            }
        }
        /* Objeto recebera um atributo (nome deste atributo é passado para a funcao)
         que sera o 'id' deste objeto. O valor do id deste objeto sera o valor do identificador
         da tupla selecionada. */
        obj[hiddenId] = vetor[t].id;

        /* Atribui o objeto criado ao vetor de retorno. */
        ret[t] = obj;
    }
    window.opener.document.retornoLocalizar = ret;
    window.opener.document.copiarLocalizado();

    /* Verifica se fecha ou nao a pagina apos selecionar. */
    if (closeWindow) window.close();
}

function isEnterPressed(evento) {
    return isKeyPressed(evento, 13);
}

function isTabPressed(evento) {
    return isKeyPressed(evento, 9);
}

function isLeftArrowPressed(evento) {
    return isKeyPressed(evento, 37);
}

function isRightArrowPressed(evento) {
    return isKeyPressed(evento, 39);
}

function isKeyPressed(evento, code) {
    var characterCode;
    if (evento && evento.which) { /* NN4 specific code */
        /*	  evento = evento; */
        characterCode = evento.which;
    } else {
        /*	  evento = event; */
        characterCode = evento.keyCode;
        /* IE specific code */
    }
    return characterCode == code;
}

/**
 * Faz um trim na string passada.
 * @param str string na qual será feito o trim.
 */
function trim(str) {
    return str != null ? str.replace(/^\s+|\s+$/g, '') : '';
}

/**
 * Se o valor passado for nulo ou vazio, imprime a mensagem 'não consta'.
 * @param value a ser verificado.
 */
function opcional(value) {
    return isBlank(value) ? '<em>não consta</em>' : value;
}

/*
 * Verifica se o valor passado e nulo ou vazio.
 * @param value a ser verificado.
*/
function isBlank(value) {
    return value == null || trim(value) == "";
}

function isNotBlank(value) {
    return !isBlank(value);
}

/**
 Remove todas as options do select passado.
 @param select select no qual as options devem ser removidas.
 */
function removeAllOptions(select) {
    for (var i = (select.options.length - 1); i >= 0; i--) {
        select.remove(i);
    }
}

/**
 * Adiciona um conjunto de options ao select passado.
 * Uso: addAllOptions(select, [label1, value1, label2, value2, ....])
 * @param select campo onde as opções serão adicionadas.
 * @param options array com as options a serem adicionadas na forma (label, value).
 * @see addOption(select, label, value, position)
 */
function addAllOptions(select, options) {
    for (var i = 0; i < options.length; i += 2) { /* label + value */
        addOption(select, options[i], options[i + 1]);
    }
}

/**
 Adiciona uma option no select passado.
 @param select select no qual a option serah adicionada.
 @param label label da option.
 @param value value da option.
 @param position posicao da option (por padrao serah colocado na ultima posicao).
 */
function addOption(select, label, value, position) {
    if (position != null && position != 'undefined' && select.length > 0) {
        var selText = new Array();
        var selValues = new Array();
        for (var i = position, j = 0; i < select.length; i++,j++) {
            selText[j] = select.options[i].text;
            selValues[j] = select.options[i].value;
        }
        select.options[position] = new Option(label, value);
        for (var i = 0; i < selText.length; i++) {
            select[position + i + 1] = new Option(selText[i], selValues[i]);
        }
    } else {
        select.options[select.length] = new Option(label, value);
    }
}

/**
 * todo: funciona apenas para values numericos.
 * Adiciona ordenadamente (em ordem crescente do value da option) um conjunto de options ao select passado.
 * Uso: addAllOptionsOrderedByValue(select, [label1, value1, label2, value2, ....])
 * @param options array com as options a serem adicionadas na forma (label, value).
 * @see addOptionOrderedByValue(select, label, value)
 */
function addAllOptionsOrderedByValue(select, options) {
    for (var i = 0; i < options.length; i += 2) {    /* label + value */
        addOptionOrderedByValue(select, options[i], options[i + 1]);
    }
}

/**
 todo: funciona apenas para values numericos.
 Adiciona ordenadamente (em ordem crescente do value da option) uma option ao select passado.
 @param select select no qual a option serah adicionada.
 @param label label da option.
 @param value value da option.
 */
function addOptionOrderedByValue(select, label, value) {
    if (select.length == 0) {
        addOption(select, label, value);
    } else {
        for (var i = 0; i < select.length; i++) {
            if (select.options[i].value > value) {
                addOption(select, label, value, i);
                return;
            }
        }
        addOption(select, label, value);
    }
}

/**
 Marca/desmarca todas as opcoes do select passado.
 @param select select no qual as opcoes devem ser marcadas/desmarcadas.
 @param isToSelect 'true' se eh para marcar, 'false' caso contrario. 
 */
function selectAll(select, isToSelect) {
    var options = select.options;
    for (var i = 0; i < options.length; i++) {
        options[i].selected = isToSelect;
    }
}

/**
 * Atribui '' para a propriedade className de um objeto.
 * @param id identificador do objeto.
 */
function clearClass(id) {
    getById(id).className = '';
}

/**
 * Atribui '' para a propriedade className dos objetos.
 * @param ids identificadores dos objetos.
 */
function clearAllClass(ids) {
    for (var i = 0; i < ids.length; i++) {
        clearClass(ids[i]);
    }
}

/**
 Adiciona as opcoes selecionadas do select de origem para o select destino.
 Se o select de destino jah possui a opcao, ela nao eh adicionada.
 @param selectOrigem select de origem.
 @param selectDestino select de destino.
 */
function addSelectedOptions(selectOrigem, selectDestino) {
    var optionsSelected = getSelectedOptions(selectOrigem);
    for (var i = 0; i < optionsSelected.length; i++) {
        var option = optionsSelected[i];
        /* se nao possui a opcao */
        if (!possuiOption(selectDestino, option)) {
            addOption(selectDestino, option.innerHTML, option.value);
        }
    }
}

/**
 Remove as opcoes selecionadas.
 @param select select do qual as opcoes selecionadas serao removidas.
 */
function removeSelectedOptions(select) {
    for (var i = select.options.length - 1; i >= 0; i--) {  
        if (select.options[i].selected) {
            select.remove(i);
        }
    }
}

/**
 Retorna as opcoes selecionadas.
 @param select select que possui as opcoes.
 */
function getSelectedOptions(select) {
    var optionsSelected = new Array();
    var options = select.options;
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.selected) {
            optionsSelected[optionsSelected.length] = option;
        }
    }
    return optionsSelected;
}

/**
 * Verifica se o select jah possui esta opcao.
 * @param select select a ser verificado.
 * @param option opcao que deve ser verificada.
 */
function possuiOption(select, option) {
    var options = select.options;
    for (var i = 0; i < options.length; i++) {
        if (option.value == options[i].value) {
            return true;
        }
    }
    return false;
}

function formatCurrency(value) {
    return 'R$ '+formatNumber(value,true);
}

function formatNumber(value, decimal, numeroCasasDecimais) {
    if(numeroCasasDecimais == null) {
        numeroCasasDecimais = 2;
    }
    var dblValue = parseFloat(value);
    if(isNaN(dblValue)) {
        var valor = '0,';
        if(decimal) {
            while(numeroCasasDecimais>0) {
                valor +='0';
                numeroCasasDecimais--;
            }
            return valor;
        }
        return '0';
    }
    var blnSign = (dblValue == (dblValue = Math.abs(dblValue)));
    var potencia = Math.pow(10, numeroCasasDecimais);
    dblValue = Math.floor(dblValue * potencia + 0.50000000001);
    var intCents = dblValue % potencia;
    dblValue = Math.floor(dblValue / potencia).toString();
    if(decimal) {
        var strCents = intCents.toString();
        while (strCents.length < numeroCasasDecimais) {
            strCents = '0'+strCents;
        }
    }
    for (var i = 0; i < Math.floor((dblValue.length - (1 + i)) / 3); i++) {
        dblValue = dblValue.substring(0, dblValue.length - (4 * i + 3)) + '.' +dblValue.substring(dblValue.length - (4 * i + 3));
    }
    if(!blnSign) {
        dblValue = '-'+dblValue;
    }
    if(decimal) {
        dblValue+=','+strCents;
    }
    return dblValue;
}

function excluir(location,mensagem) {
    var msg;
    if(mensagem == null) {
        msg = 'Você tem certeza que quer excluir ?';
    } else {
        msg = mensagem;
    }
    if(confirm(msg)) {
        window.location=location;
    }
}
