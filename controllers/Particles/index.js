export default class Particles {

  constructor(div, height, width) {

    this.div = div
    this.canvas = document.createElement('canvas')
    this.canvas.height = height //window.innerHeight
    this.canvas.width = width //window.innerWidth

    this.w = height
    this.h = width

    this.ctx = this.canvas.getContext('2d')
    this.backgroundImage = new Image()
    this.backgroundImage.src = "https://super.abril.com.br/wp-content/uploads/2019/09/si_pretomit.png"

    this.flakes = []
  }

  addFlakes() {
    const x = Math.ceil(Math.random() * this.w)
    const y = Math.ceil(Math.random() * this.h)
    const speed = Math.ceil(Math.random() * 5)
    const radius = 10 * Math.PI

    this.flakes.push({
      x,
      y,
      speed,
      radius
    })

    if (this.flakes.length > 100) {
      this.flakes.shift()
    }

  }

  addParticles() {
    for (let i = 0; i < this.flakes.length; i++) {
      let oneFlake = this.flakes[i]
      let random = (Math.random() * 2) - 1

      /* Drawing */
      this.ctx.beginPath()

      this.ctx.fillStyle = `rgba(100,100,200,0.${i * 1.5})`

      this.ctx.arc(
        (oneFlake.x += (oneFlake.speed / 5 + random) + 1),
        (oneFlake.y += (oneFlake.speed / 5 * random) - 1),
        (oneFlake.speed * 0.8), 0,
        oneFlake.radius
      )


      this.ctx.fill()
    }
  }

  particlesGen() {
    this.ctx.drawImage(this.backgroundImage, 0, 0, this.h, this.h)
    this.addParticles()
  }

  startParticles(){
  
    window.addEventListener('resize', function () {
      this.canvas.height = window.innerHeight
      this.canvas.width = window.innerWidth
    })

    this.div.appendChild(this.canvas)

    setInterval(() => this.particlesGen(), 30)
    setInterval(() => this.addFlakes(), 160)
  }
}