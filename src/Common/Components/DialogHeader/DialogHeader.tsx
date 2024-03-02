import styles from "./DialogHeader.module.scss";
interface IDialogHeaderProps {
  label: string;
}
export const DialogHeader = (props: IDialogHeaderProps) => {
  return (
    <div className={styles.dialogHeader}>
      <span className={styles.dialogLabel}>{props?.label}</span>
    </div>
  );
};
