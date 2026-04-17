import Image from "next/image";
import styles from "./page.module.css";

import CoverForm from "./cover/Cover";

export default function Home() {
  return (
    <div>
      <main style={{
      display: 'flex',
      justifyContent: 'center', // Centrado horizontal
      alignItems: 'center',     // Centrado vertical
      height: '100vh'           // Altura total de la pantalla
    }} >
        <CoverForm>

        </CoverForm>
      </main>
    </div>
  );
}
