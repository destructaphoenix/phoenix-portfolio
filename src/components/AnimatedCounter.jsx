import { useEffect, useRef } from 'react'
import { CountUp } from 'countup.js'
import { counterItems } from '../constants/index.js'

const CountUpNumber = ({ end, suffix }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const counter = new CountUp(el, end, {
      suffix,
      duration: 2,
    })

    if (counter.error) {
      console.error('CountUp error:', counter.error)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counter.start()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      counter.reset()
    }
  }, [end, suffix])

  return <span ref={ref}>0</span>
}

const AnimatedCounter = () => {
  return (
    <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              <CountUpNumber end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter
