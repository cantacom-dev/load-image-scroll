# load-image-scroll


Esse script é responsável pelo carregamento de imagens ao executar o scroll do navegador. As imagens são carregadas somente quando forem visualizadas pelo navegador. 


## Como implementar


> O primeiro passo é chamar as dependências:


```HTML
<script type="text/javascript" src="src/load-image-scroll.js"></script>
```

> O segundo passo é invocar o método escolhendo um selector:


```JAVASCRIPT
loadimages.selector('.my-selector'); 
```

> E o último passo é sinalizar para o script os elementos no documento HTML. Vamos adicionar aos elementos o atributo `[class]` usando a classe declarada em nosso método, sendo ela: `.my-selector`. Também vamos adicionar o atributo `[data-src]`, neste atributo vamos declarar o endereço da nossa imagem. 

