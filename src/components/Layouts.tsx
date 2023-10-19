import styles from "./Layouts.module.css";
import { Magnet, MagnetType } from "./Magnet";

export const Layouts = () => {
  return (
    <div className={styles.container}>
      <Magnet type={MagnetType.Default} />
      <Magnet type={MagnetType.Double} />
      <Magnet type={MagnetType.Triple} />
      <Magnet type={MagnetType.Grid} />
    </div>
  );
};
