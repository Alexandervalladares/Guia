import styles from "./page.module.css";
import Form from "@/components/Form";
export default function Home() {
return (
<main className={styles.main}>
<div className="App">
<div>
<p>
Aquí haremos lista de compras
</p>
<Form></Form>
</div>
</div>
</main>
);
}
