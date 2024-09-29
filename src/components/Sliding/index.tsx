import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import '../../app/globals.scss';
import Image from 'next/image';
import image from '../../public/images/headphones.svg'
// import '../../app/globals.css'

const slider1 = [
    {
        color: "#e3e5e7",
        src: image
    },
    {
        color: "#d6d7dc",
        src: image
    },
    {
        color: "#e3e3e3",
        src: image
    },
    {
        color: "#21242b",
        src: image
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: image
    },
    {
        color: "#e5e0e1",
        src: image
    },
    {
        color: "#d7d4cf",
        src: image
    },
    {
        color: "#e1dad6",
        src: image
    }
]

export default function Sliding() {

    const container = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start end", "end start"]
    // })

    // const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    // const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    // const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            {/* <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={project.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={project.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div> */}
                <motion.div style={{height:"10px"}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}