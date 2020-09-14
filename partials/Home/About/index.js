import styles from './styles.module.scss'

export default function Hero() {

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.avatar}>
          <img src='./avatar.png' />
        </div>
        <p>
          Me chamo Jhonatan Teixeira Rios, e atuo como programador há 2 anos. Sou formado em comunicação visual e tenho 1 ano de experiência como Designer Gráfico e Motion Designer. Atualmente trabalho como Desenvolvedor Front-End para clientes como a Cielo e Aeromaster além de manter sistemas web e aplicativos desenvolvidos em diversas técnologias como Vue, React, React Native, Node e Python.
        </p>
      </div>
    </div>
  )
}