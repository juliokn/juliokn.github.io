window.onload = function(){
    var idDoItem = 0;       //será o id dos itens - duas variaveis separadas para não haver repetição de ids
    var limiteDeItems = 0;  //controla a quantidade de itens
    var novoItem = document.querySelector(".todolistContainer__text");
    var localParaNovoItemHtml = document.querySelector(".todolistItems");

    //to-do list implementada com clique no botão
    $(".todolistContainer__btn").click(function(){
        if (this.id === 'Add'){
            adicionaItem();
        }
        else{
            localParaNovoItemHtml.innerHTML = "";
            limiteDeItems = 0;
        }
    })

    //to-do list implementada com enter
    window.onkeydown = function(pressedKey){
        if (pressedKey.keyCode === 13){
            adicionaItem();
        }
    }

    function adicionaItem(){
        if (novoItem.value != "" && limiteDeItems < 10){
            localParaNovoItemHtml.innerHTML +=
             "<div class='todolistItems__item' id='"+idDoItem+"'><div class='todolistItems__itemNome'><h2 class='containerItem'>"+novoItem.value+"</h2></div><div class='todolistItems__itemIcones'><img class='todolistItems__icon "+idDoItem+"' id='iconCheck' src='./_icons/icon_check.png'><img class='todolistItems__icon "+idDoItem+"' id='iconDel' src='./_icons/icon_delete.png'></div></div>";
            idDoItem++;
            limiteDeItems++;
            document.querySelector(".todolistContainer__text").value = "";
        }
    }

    //the img isn't in the DOM when your event handler is registered, so we use:
    $('body').on('click','.todolistItems__icon', function(){
        var myClass = this.classList[1];
        //usei essa solução para selecionar o item porque o numero é considerado caractere especial
        var itemParaModificacao = document.querySelector("[id='"+myClass+"']");
            if (this.id == 'iconDel'){
                //alternativamente, "$("#"+myClass).remove();")
                itemParaModificacao.remove();
                limiteDeItems--;
            } else{
                itemParaModificacao.style.textDecoration = "line-through";
            }
    })

    //changing the max-length for mobile
    if (window.matchMedia("(max-width: 576px)").matches) {
        $(".todolistContainer__text").attr("maxlength", 19);
    }
    }

// to-do:
// formatação para telas menores (@media)