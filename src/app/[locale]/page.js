import Image from "next/image";
import styles from "./page.module.css";
import CoverForm from "./cover/page";

export default function Home() {
  return (
    <div>
      <main style={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',     
      height: '100vh'           
    }} >
        <CoverForm>

        </CoverForm>
      </main>
    </div>
  );
}
