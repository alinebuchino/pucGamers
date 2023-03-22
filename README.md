
## :bookmark_tabs: Sobre a aplicação
O aplicativo "PucGamers" tem como objetivo ajudar na organização de partidas em jogatinas com os amigos, onde, através da conexão com a conta do Discord, é possível agendar os jogos, convidar amigos, compartilhar links para servidores, entre outras funcionalidades para controlar os diversos tipos de partidas e jogos!
- Aplicação construída na trilha de React Native durante a Next Level Week #06: Together (evento oferecido pela Rocketseat) 🚀

### :hammer_and_wrench: Tecnologias
As seguintes tecnologias e ferramentas estão sendo utilizadas neste projeto:

- [Figma](http://www.figma.com/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
  
### Funcionalidades
- [X] Login com autenticação utilizando o Discord
- [X] Listagem de partidas agendadas
- [X] Agendamento de novas partidas
  - [X] ADICIONAL: Verificação se todos os campos para agendar a partida estão preenchidos
  - [X] ADICIONAL: Verificação se a data e hora escolhida são válidas (apenas datas futuras)
- [X] ADICIONAL: Exclusão de todas as partidas realizadas
- [X] Visualização de detalhes da partida
  - [X] ADICIONAL: Lembrete de quando a partida irá ocorrer, ou se já ocorreu
  - [X] ADICIONAL: Tratamento de erro caso o servidor não tenha widget ativado
- [X] Compartilhamento de link para servidor
- [X] ADICIONAL: Modal de "logout"

- [ ] Outras ideias: Edição e exclusão de partida, deixar o botão de "entrar na partida" desabilitado até o horário agendado, gerar notificação 10 minutos antes do início da partida...

<span id="demo">
  
## :iphone: Demonstração
Abaixo é possível encontrar uma demonstração das telas e funcionalidades do projeto desenvolvido, com a alteração de cores e algumas imagens, mas se quiser 
conferir o layout original das telas, é só acessar [este link](https://www.figma.com/file/3oUtbd1Wq8RVgr7oUilrFC/PucGamers?node-id=58913%3A83&t=Mk3XKIJrl8xTSzRb-1) para o projeto no Figma.
  
<!-- <p align="center">
  <img alt="Demonstração" src=".github/demo-com-melhorias.gif" width="230px" />
</p> -->

<span id="requisitos">

## :gear: Como rodar
Com o [Node](https://nodejs.org/en/) e o [Expo](https://expo.io/) instalados em sua máquina e um emulador ou o [Expo Go](https://expo.io/client) no dispositivo físico, baixe ou clone este repositório e siga o passo a passo descrito abaixo.
  
[Cadastre o aplicativo](https://discord.com/developers/applications) no Discord para conseguir acesso ao serviço de autenticação, colocando o redirect como `https://auth.expo.io/@<seu usuário no expo>/pucgamers` e marcando, na aba "OAuth2", as 4 primeiras opções para o escopo, definindo essas configurações também em um arquivo `.env` no projeto (siga o exemplo do arquivo ".env.example", retirando o '.exemple' depois).
 
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```
Agora, por um terminal...
```bash
# Acesse a pasta do projeto
$ cd pucgamers

# Instale as dependências do projeto
$ npm install
# ou
$ yarn add

# Inicie o projeto
$ expo start
```
Agora o servidor do Expo estará ativo, verifique se seu celular e PC então na mesma rede e, preferencialmente, com o Firewall do PC desligado, 
então leia o QR Code pelo Expo Go ou entre por um emulador.
