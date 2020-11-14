
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
            title: 'Smart Gadget Web',
            description: 'Este app faz uso de inteligência artificial e proceessamento de linguagem natural para recomendar modelos de notebooks, baseado nas necessidades do usuário. As tecnologias utilizadas foram: React, React-router, Redux, Redux-saga, Jest, Styled-components, Node, Express, MongoDB e Natural.js',
            background: './projects/smart-gadget.png',
            link: 'https://smart-gadget-web.herokuapp.com/',
            github: 'https://github.com/jhonatan98rios/smart.gadget.frontend',
            color: 'rgba(91,26,184, .9)'
          },
          {
            title: 'Fareja Fatos App',
            description: 'Este aplicativo foi desenvolvido durante o Hackcovid-19 (evento patrocinado pela Fiocruz), com o objetivo de auxiliar a população na identificação de noticias falsas através de inteligência artificial. As tecnologias utilizadas foram: React-native, React-router, Styled-components, Axios, Python, Flask e MongoDB',
            background: './projects/fareja-fatos-app.png',
            github: 'https://github.com/jhonatan98rios/FarejaFatosApp',
            color: 'rgba(91,26,184, .9)'
          },
          {
            title: 'Fareja Fatos Institucional',
            description: 'Este site foi desenvolvido para promover e divulgar o aplicativo Fareja Fatos, disponibilizando dados técnicos e artigos científicos para a conscientização da população. As tecnologias utilizadas foram: Next.js (framework React), Styled-components, Axios, MongoDB e Firebase',
            background: './projects/fareja-fatos-blog.png',
            github: 'https://github.com/jhonatan98rios/fareja-fatos-site',
            link: 'https://fareja-fatos-web.herokuapp.com/',
            color: 'rgba(14,179,156, .9)'
          },
          {
            title: 'Fire Day',
            description: 'Um jogo web criado para conscientizar a população sobre os efeitos das queimadas. As tecnologias utilizadas foram: Vue, Vuex, Vue-router, Vue2-touch-events, Sass e Particles.js',
            background: './projects/fireday.png',
            github: 'https://github.com/jhonatan98rios/fireDay',
            color: 'rgba(91,26,184, .9)'
          },
          {
            title: 'Whatsapp Clone Vanilla',
            description: 'Um clone do Whatsapp Web. Tecnologias utilizadas: HTML, CSS, Javascript MVC, Webpack, Firebase-storage, Firebase-firestore e Firebase-functions',
            background: './projects/whatsapp-clone-vanilla.png',
            github: 'https://github.com/jhonatan98rios/clothing_store',
            color: 'rgba(14,179,156, .9)'
          },
          {
            title: 'Clothing Store',
            description: 'Um marketplace para lojas de roupa catalogarem seus produtos. As tecnologias utilizadas foram: React, React-router, Sass e Axios',
            background: './projects/clothing_store.png',
            github: 'https://github.com/jhonatan98rios/clothing_store',
            color: 'rgba(14,179,156, .9)'
          },
          {
            title: 'Sistema de Gestão',
            description: 'Um sistema de linha de comando para gerenciamento de clientes, funcionários, vendas e estoque. A tecnologia utilizada nesse projeto foi a linguagem C',
            github: 'https://github.com/jhonatan98rios/clothing_store',
            color: 'rgba(14,179,156, .9)'
          },
        ],
      },
      github: 'Compartilhar o conhecimento e a experiência nos ajuda a ir mais longe. Acesse aqui o código de meus principais projetos.'
    }
  }

  return page

}
