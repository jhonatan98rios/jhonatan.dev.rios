// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

  const page = {
    body: {
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
          url: './technologies/figma.png' 
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
      ]
    }
  }

  if (req.method === 'GET'){
    res.statusCode = 200
    res.end(JSON.stringify({ page }))
  }else{
    res.statusCode = 500
    res.end(JSON.stringify({ error: 'Erro ao conectar' }))
  }

}
