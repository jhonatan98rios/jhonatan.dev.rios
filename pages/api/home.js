export const home = (req, res) => {

  const page = {
    head:{
      title: 'Jhonatan Teixeira Rios',
      description: 'Seja bem vindo ao meu portfólio de desenvolvimento web'
    },
    body: {
      hero: '"As pessoas que são loucas o suficiente para achar que podem mudar o mundo, são aquelas que o mudam" (Steve Jobs)',
      about: 'Me chamo Jhonatan Teixeira Rios, e atuo como programador há 2 anos. Sou formado em comunicação visual e tenho 1 ano de experiência como Designer Gráfico e Motion Designer. Atualmente trabalho como Desenvolvedor Front-End para clientes externos além de manter sistemas web e aplicativos independentes, desenvolvidos em diversas técnologias como Vue, React, React Native, Node e Python.',
      technologies: [
        { 
          title: 'HTML', 
          url: './technologies/html5.png' 
        }, 
        { 
          title: 'CSS', 
          url: './technologies/css3.png' 
        }, 
        { 
          title: 'JS', 
          url: './technologies/js.png' 
        }, 
        { 
          title: 'React', 
          url: './technologies/react.png' 
        }, 
        { 
          title: 'React Native', 
          url: './technologies/rn.png' 
        }, 
        { 
          title: 'Next.js', 
          url: './technologies/next.png' 
        }, 
        { 
          title: 'Vue', 
          url: './technologies/vue.png' 
        }, 
        { 
          title: 'Nuxt.js', 
          url: './technologies/nuxt.png' 
        }, 
        { 
          title: 'Node', 
          url: './technologies/node.png' 
        }, 
        { 
          title: 'Git', 
          url: './technologies/git.png' 
        }, 
        { 
          title: 'Sass', 
          url: './technologies/styled.png' 
        }, 
        { 
          title: 'Figma', 
          url: './technologies/figma.png' 
        }, 
        { 
          title: 'Adobe Creative Suite', 
          url: './technologies/adobe.png' 
        }, 
        { 
          title: 'MongoDB', 
          url: './technologies/mongo.png' 
        }, 
        { 
          title: 'MySQL', 
          url: './technologies/mysql.png' 
        }, 
        { 
          title: 'Python', 
          url: './technologies/python.png' 
        }, 
        {
          title: 'Flask',
          url: './technologies/flask.png'
        }
      ],
      github: 'Compartilhar o conhecimento e a experiência nos ajuda a ir mais longe. Acesse aqui o código de meus principais projetos.'
    }
  }

  return page

}
