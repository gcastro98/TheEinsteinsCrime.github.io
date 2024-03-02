import { PrimaryButton } from "@fluentui/react"
import styles from "./CustomButton.module.scss";

export function CustomButton(props: any){
    return <div className={styles.customButton}>
        <PrimaryButton {...props} />
    </div>
}