import { useEffect } from 'react'
import styles from './styles.module.scss'

export default function Technologies() {

  const itens = [
    {
      text: 'HTML',
      percentage: '100',
      initial: '0'
    },
    {
      text: 'CSS',
      percentage: '20',
      initial: '0'
    }
  ]

  useEffect(()=>{


  },[])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Linguagens e Tecnologias </h2>
      <div className={styles.carousel}>
        <ul>
          {
            itens.map((item, index) => {
              return(
                <li 
                  className="list-item"
                  key={index}
                  style={{
                    backgroundImage: `conic-gradient(
                      from 0,
                      #232628 0,
                      #232628 calc(100% - ${item.percentage}%),
                      #00FFC2 0,
                      #A700F5 50%,
                      #00FFC2 100%
                    )`
                  }}
                >
                  <span>
                    {item.text}
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
    
  )
}
