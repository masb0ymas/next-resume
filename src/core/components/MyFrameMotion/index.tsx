import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface MyFrameMotionProps {
  children: React.ReactNode
}

function MyFrameMotion(props: MyFrameMotionProps) {
  const { children } = props

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  const motionVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={motionVariants}
      transition={{ ease: 'easeOut', duration: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default MyFrameMotion
