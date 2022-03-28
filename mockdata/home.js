export const home = (req, res) => {

  const page = {
    head:{
      title: 'Jhonatan Teixeira Rios',
      description: 'Seja bem vindo ao meu portfólio de desenvolvimento web'
    },
    body: {
      hero: '"As pessoas que são loucas o suficiente para achar que podem mudar o mundo, são aquelas que o mudam" (Steve Jobs)',
      about: 'Me chamo Jhonatan Teixeira Rios, e atuo como programador há 4 anos. Sou formado em comunicação visual e tenho 1 ano de experiência como Designer Gráfico e Motion Designer. Atualmente trabalho como Eng. de Dados e Desenvolvedor Front-End autônomo além de manter sistemas web e aplicativos independentes, desenvolvidos em diversas técnologias como Vue, React, React Native, Node e Python.',
      technologies: {
        frontend: [
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
            title: 'Typescript', 
            url: './technologies/typescript.png' 
          }, 
          { 
            title: 'React', 
            url: './technologies/react.png' 
          },
          { 
            title: 'Redux', 
            url: './technologies/redux.png' 
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
            title: 'Ionic', 
            url: './technologies/ionic.png' 
          },
          { 
            title: 'Sass', 
            url: './technologies/sass.png' 
          },
          { 
            title: 'Styled-Components', 
            url: './technologies/styled.png' 
          }
        ],
        backend: [
          { 
            title: 'Node', 
            url: './technologies/node.png' 
          },
          { 
            title: 'Express', 
            url: './technologies/express.png' 
          },
          { 
            title: 'Socketio', 
            url: './technologies/socketio.png' 
          },
          { 
            title: 'Python', 
            url: './technologies/python.png' 
          }, 
          {
            title: 'Flask',
            url: './technologies/flask.png'
          },
          { 
            title: 'MongoDB', 
            url: './technologies/mongo.png' 
          }, 
          { 
            title: 'PostgreSQL', 
            url: './technologies/postgresql.png' 
          },
          { 
            title: 'MySQL', 
            url: './technologies/mysql.png' 
          },
          { 
            title: 'SQLite', 
            url: './technologies/sqlite.png' 
          }
        ],
        others: [
          { 
            title: 'Git', 
            url: './technologies/git.png' 
          },
          { 
            title: 'Webpack', 
            url: './technologies/webpack.png' 
          },
          { 
            title: 'Gulp', 
            url: './technologies/gulp.png' 
          },
          { 
            title: 'Grunt', 
            url: './technologies/grunt.png' 
          },
          { 
            title: 'Jest', 
            url: './technologies/jest.png' 
          },
          { 
            title: 'Figma', 
            url: './technologies/figma.png' 
          }, 
          { 
            title: 'Adobe Creative Suite', 
            url: './technologies/adobe.png' 
          },
        ]
      },
      github: 'Compartilhar o conhecimento e a experiência nos ajuda a ir mais longe. Acesse aqui o código de meus principais projetos.',
      farejafatos: {
        title: 'Fareja Fatos',
        description1: 'Verifique se uma notícia é falsa em apensar 3 cliques.',
        description2: 'É só instalar o app, selecionar o texto da notícia e compartilhar, diretamente de qualquer aplicativo.',
        knowmore: {
          href: 'https://fareja-fatos-web.herokuapp.com/',
          label: 'Veja mais',
          target: '_blank'
        }
      }
    }
  }

  return page

}
