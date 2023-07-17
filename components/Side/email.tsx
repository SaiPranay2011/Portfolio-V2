import Side from "./side"
import { email } from "@/public/config";
import styles from "@/public/styles/components/socialSide.module.scss"
import Link from "next/link";
const Email = () => {
    return(
        <Side orientation="right">
            {email && (
                <div className={styles.emailList}>
                <Link href={email} target="_blank" className={styles.email}>
                    {email}
                </Link>
                </div>
            )}
        </Side>
    )
}
export default Email;