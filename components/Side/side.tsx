"use-client"

import styles from "@/public/styles/components/socialSide.module.scss"
const Side = ({orientation,children}:any) => {

    return(
        <div className={`${styles.socialContainer} ${orientation == 'left' ? styles.left : styles.right}`}>
           {children}
        </div>
    )
}
export default Side;