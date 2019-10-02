# Contribuindo

Clone este repositório e instale as dependências.

```
git clone https://github.com/reebr/challenge-stats.git

cd ./challenge-stats
yarn
```

<sup>Exemplo no Windows utilizando [Yarn][2].</sup>


## Token

Para consumir a API do GitHub, é necessário a criação de um token provendo os escopos (ou permissões) disponíveis. Para que esta aplicação funcione corretamente, o escopo `repo` deve ser marcado quando você [criar um novo token][1].

## Executando em modo de desenvolvimento

Uma vez tendo as dependências instaladas e o token criado no GitHub. No terminal/console, defina a variável de ambiente `VUE_APP_GH_TOKEN` com o valor do token disponibilizado pelo GitHub. Após isto, basta executar o comando `serve` para iniciar a aplicação:

```

$env:VUE_APP_GH_TOKEN="<token>"
yarn serve

DONE  Compiled successfully in 286ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://x.x.x.x:8080/
```

<sup>Exemplo no Windows utilizando Powershell.</sup>

## Build para produção

Para construir a aplicação pronta para produção, utilize o comando `yarn serve`.

[1]:https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line
[2]:https://yarnpkg.com/lang/en/