
export const projects = (req, res) => {

  const page = {
    head: {
      title: 'Jhonatan Teixeira Rios | Projetos',
      description: 'Veja aqui alguns dos meus projetos principais de desenvolvimento web'
    },
    body: {
      projects: {
        title: 'Confira meus projetos principais',
        projectList: [
          {
            title: 'Dead Nation',
            description: 'Dead Nation é um shooter 2D top-down de zumbis, com diversos níveis de dificuldade e uma loja com armas e equipamentos para melhoria do personagem. As tecnologias utilizadas foram: Ionic, React, Typescript e Sass',
            background: './projects/dead-nation.png',
            link: 'https://play.google.com/store/apps/details?id=com.rios.deadnation',
            github: 'https://github.com/jhonatan98rios/DeadNationApp',
            color: 'rgba(91,26,184, .9)'
          },
          {
            title: 'Swordio',
            description: 'Swordio é um Turn-based RPG online, de combate PVP que roda diretamente no browser. É só criar uma conta, fazer login e criar uma sala. Depois é só compartilhar a sala com seus amigos e começar a jogar. As tecnologias utilizadas foram: Vue, Sass, Node, Socket.io, PostgreSQL',
            background: './projects/swordio.png',
            link: 'https://sword-io.herokuapp.com/',
            github: 'https://github.com/jhonatan98rios/swordio',
            color: 'rgba(14,179,156, .9)'
          },
          {
            title: 'Guia de hardware',
            description: 'Este app faz uso de inteligência artificial e processamento de linguagem natural para recomendar modelos de notebooks, baseado nas necessidades do usuário. As tecnologias utilizadas foram: React-Native, Redux, Redux-saga, Styled-components, Node, Express, Natural.js, Jest e MongoDB',
            background: './projects/hardware-guide.png',
            link: 'https://play.google.com/store/apps/details?id=com.hardwareguide',
            github: 'https://github.com/jhonatan98rios/HardwareGuide',
            color: 'rgba(91,26,184, .9)'
          },
          {
            title: 'Fareja Fatos App',
            description: 'Este aplicativo foi desenvolvido durante o Hackcovid-19 (evento patrocinado pela Fiocruz), com o objetivo de auxiliar a população na identificação de noticias falsas através de inteligência artificial. As tecnologias utilizadas foram: React-native, Styled-components, Axios, Python, Flask e MongoDB',
            background: './projects/fareja-fatos.png',
            link: 'https://play.google.com/store/apps/details?id=com.farejafatosapp',
            github: 'https://github.com/jhonatan98rios/FarejaFatosApp',
            color: 'rgba(14,179,156, .9)'
          }
        ],
      },
      github: 'Compartilhar o conhecimento e a experiência nos ajuda a ir mais longe. Acesse aqui o código de meus principais projetos.'
    }
  }

  return page

}
