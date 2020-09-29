import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export default function Technologies({item}) {

  const [frame, setFrame] = useState(100)

  useEffect(()=>{

    let animation = setInterval(() => {
      if(frame > 0){
        if(frame <= 60 && frame >= 40){ setFrame(old => old - 3) } else 
        if(frame <= 80 && frame >= 20){ setFrame(old => old - 2) } else
        if(frame <= 90 && frame >= 10){ setFrame(old => old - 1) }
        else { setFrame(old => old - 1) }
      }
    }, 30)
    return () => clearInterval(animation)
  },[frame])

  return (
    <>
      <li 
        className={styles.listItem}
        style={{ backgroundImage: `conic-gradient( from 0, #232628 0, #232628 ${frame}%, #00FFC2 0, #A700F5 50%, #00FFC2 100% )` }}
      >
        <span className="paragraph">
          {item}
        </span>
      </li>
    </>
    
  )
}
