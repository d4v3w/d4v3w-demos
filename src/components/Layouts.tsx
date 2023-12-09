import styles from "./Layouts.module.css";
import { Magnet, MagnetType } from "./Magnet";

export const Layouts = () => {
  return (
    <div className={styles.container}>
      <Magnet
        type={MagnetType.Default}
        title=""
        content=""
        description=""
        logo=""
        footer=""
      />
      <Magnet
        type={MagnetType.Double}
        title=""
        content=""
        description=""
        logo=""
        footer=""
      />
      <Magnet
        type={MagnetType.Triple}
        title=""
        content=""
        description=""
        logo=""
        footer=""
        image=""
        link=""
        cta=""
        footnote=""
        subImage={[]}
      />
      <Magnet
        type={MagnetType.Grid}
        title=""
        content=""
        description=""
        logo=""
        footer=""
      />
    </div>
  );
};
