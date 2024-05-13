import styles from "./page.module.css";

const buttonURL = "https://664099e473cee1d4b7313e8f-kztvxsdpsh.chromatic.com/?path=/docs/design-system-pandaui-button--docs"

export default function Home() {
    return (
        <>
    <main className = {styles.wrapper}>
        <iframe
            className = {styles.storybook}
            src = {buttonURL}
        />
      </main >
  </>
    );
}