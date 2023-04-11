import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={styles.hero}>
      <h1>Bienvenido a Qwik</h1>
      
    </div>
  );
});
