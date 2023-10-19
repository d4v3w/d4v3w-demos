import classNames from "classnames";
import { Button } from "./Button";
import styles from "./Magnet.module.css";

export enum MagnetType {
  Default = "default",
  Double = "double",
  Triple = "triple",
  Grid = "grid",
}

export type MagnetContent = {
  logo: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  link?: string;
  cta?: string;
  footnote?: string;
  footer?: string;
  subTitle?: string;
  subDescription?: string;
  subImage?: string;
};

export interface MagnetProps {
  type: MagnetType;
  content?: MagnetContent;
  children?: React.ReactNode;
}

export const Magnet = ({
  type = MagnetType.Default,
  content = {
    logo: "test.png",
    title: "Test",
    image: "test.png",
    description:
      "Duis cupidatat nulla exercitation eu incididunt occaecat aliqua laborum proident.",
    link: "",
    cta: "",
    footnote: "",
    footer: "&copy; Dave owns this 2023",
    subTitle: "",
    subDescription: "",
    content: "",
  },
}: MagnetProps) => {
  console.log(type);
  return (
    <div className={classNames(styles.container, styles[type])}>
      <div className={styles.logo}>
        <picture>
          <img src={content.logo} srcSet={`${content.logo} 320w`} alt="" />
        </picture>
      </div>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.image}>
        <picture>
          <img src={content.image} srcSet={`${content.image} 320w`} alt="" />
        </picture>
      </div>
      <div className={styles.content}>{content.content}</div>
      <div className={styles.cta}>
        <Button label={content.cta || "Click"} />
      </div>
      <div className={styles.footnote}>{content.footnote}</div>
      <div className={styles.subTitle}>{content.subTitle}</div>
      <div className={styles.subDescription}>{content.subDescription}</div>
      <div className={styles.subContent}>{content.content}</div>
      <div className={styles.subImage}>{content.subImage}</div>
      <div className={styles.footer}>{content.footer}</div>
      <div className={styles.empty}></div>
    </div>
  );
};
