import styles from "./page.module.scss";
const  buttonURL = "https://664099e473cee1d4b7313e8f-dwvpbtpoxo.chromatic.com/?path=/docs/design-system"

export default function Home() {
  return (
  <>
    <main className={styles.wrapper}>
        <iframe
            className={styles.storybook}
            src = {buttonURL}/>
      </main>
  </>
  );
}