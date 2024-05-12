'use client'
import styles from "./page.module.scss";
import {Button} from '../index'

export default function Home() {
  return (
  <>
    <main className={styles.wrapper}>
        <Button
            label="Button"
            onClick={() => {console.log("Hello")}}
            primary
            size="large"
        />
      </main>
  </>
  );
}