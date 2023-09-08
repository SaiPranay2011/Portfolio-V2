"use-client"

import { socialMedia } from "@/public/config"
import Side from "./side";
import Link from "next/link";
import Icon from "@/components/icons/icon";
import styles from "@/public/styles/components/socialSide.module.scss"
const Social = () => {
    return(

            <Side orientation="left">

                {socialMedia && (
                <ul className={styles.socialList}>
                    {socialMedia?.map(({name,url}:any,i:any) => (
                        <li key={i}>
                        <Link href={url} aria-label={name} target="_blank" rel="noreferrer" className={styles.links}>
                          <Icon name={name} />
                        </Link>
                      </li>
                    ))
                }
                </ul>
                )}
            </Side>
    );
}

export default Social;