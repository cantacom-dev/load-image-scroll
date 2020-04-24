# load-image-scroll


Esse script é responsável pelo carregamento de imagens ao executar o scroll do browser. As imagens são carregadas somente quando estiverem dentro da área de visualização.


## Como implementar


> O primeiro passo é chamar as dependências:


```HTML
<script type="text/javascript" src="src/load-image-scroll.js"></script>
```

> O segundo passo é invocar o método escolhendo um selector:


```JAVASCRIPT
loadimages.selector('.my-selector'); 
```

> E o último passo é sinalizar para o script os elementos no documento HTML. Vamos adicionar aos elementos o atributo `[class]` usando a classe declarada em nosso método, sendo ela: `.my-selector`. Também vamos adicionar o atributo `[data-src]`, neste atributo vamos declarar o endereço da nossa imagem, exemplo `http://www.host.com/img/my-image.jpg`.

Exemplos:

```HTML
<img class="my-selector" data-src="http://www.host.com/img/my-image.jpg" alt="Imagem">
```
```HTML
<div class="my-selector" data-src="http://www.host.com/img/my-image.jpg"></div>
```
```HTML
<picture class="my-selector">
    <source data-src="http://www.host.com/img/my-image.jpg" media="(max-width: 768px)" srcset="">
    <img data-src="http://www.host.com/img/my-image.jpg" alt="" src="">
</picture>
```

