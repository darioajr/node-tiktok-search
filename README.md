# TikTok Search

Um programa em Node.js que utiliza a API do TikTok para pesquisar vídeos com uma hashtag específica.

## Instalação

1. Clone este repositório ou baixe o código-fonte e extraia-o.
2. No terminal, navegue até a pasta do projeto e execute o comando `npm install` para instalar as dependências.

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
USER_AGENT=seu_user_agent
TT_WEBID=seu_web_id
TT_WEBID_V2=seu_web_id_v2
```


Substitua `seu_user_agent`, `seu_web_id` e `seu_web_id_v2` pelos valores relevantes do seu navegador.

2. Para obter o user agent do seu navegador, visite a página https://www.whatsmyua.info/.
3. Para obter os cookies 'tt_webid' e 'tt_webid_v2', abra o site https://www.tiktok.com/ no seu navegador, acesse as Ferramentas do Desenvolvedor (pressionando F12 ou botão direito -> Inspecionar) e procure os cookies na aba Aplicação/Armazenamento (Application/Storage) > Cookies.

## Uso

1. No arquivo `index.js`, substitua a variável `hashtag` pelo termo de pesquisa desejado.
2. No terminal, na pasta do projeto, execute o comando `npm start` para iniciar a pesquisa.

## Exemplo de resultado
Video 1:
ID: 1234567890123456789
Descrição: Exemplo de descrição do vídeo
URL: https://www.tiktok.com/@username/video/1234567890123456789


## Aviso

O uso de APIs não oficiais como a `tiktok-api` pode ser contra os termos de serviço do TikTok e o código pode parar de funcionar se o TikTok mudar seus endpoints ou requisitos de autenticação.
