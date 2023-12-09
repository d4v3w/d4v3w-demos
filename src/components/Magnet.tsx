import classNames from "classnames";
import { ReactNode } from "react";
import { Button } from "./Button";
import styles from "./Magnet.module.css";

export enum MagnetType {
  Default = "default",
  Double = "double",
  Triple = "triple",
  Grid = "grid",
}

export type MagnetDefault = {
  type: MagnetType.Default;
  title: string;
  description: string;
  content: string;
  logo: string;
  footer: string;
  children?: ReactNode;
};

export type MagnetDouble = {
  type: MagnetType.Double;
  title: string;
  description: string;
  content: string;
  logo: string;
  footer: string;
  children?: ReactNode;

  subTitle?: string;
  subDescription?: string;
};

export type MagnetTriple = {
  type: MagnetType.Triple;
  title: string;
  description: string;
  content: string;
  logo: string;
  footer: string;
  children?: ReactNode;

  image: string;
  link: string;
  cta: string;
  footnote: string;
  subImage: string[];
};

export type MagnetGrid = {
  type: MagnetType.Grid;
  logo: string;
  title: string;
  description: string;
  content: string;
  footer: string;
  children?: ReactNode;
};

export type MagnetProps =
  | MagnetDefault
  | MagnetDouble
  | MagnetTriple
  | MagnetGrid;

export const Magnet = (magnet: MagnetProps) => {
  const { type, logo, title, description } = { ...magnet };

  const MagnetComponent = (magnet: MagnetProps) => {
    switch (magnet.type) {
      case MagnetType.Double:
        return <MagnetDoubleLayout {...magnet} />;
      case MagnetType.Triple:
        return <MagnetTripleLayout {...magnet} />;
      case MagnetType.Grid:
        return <MagnetGridLayout {...magnet} />;
      default:
        return <MagnetDefaultLayout {...magnet} />;
    }
  };

  return (
    <div
      className={classNames(styles.container, styles[type])}
      data-testId="magnet"
      data-magnet-type={type}
    >
      <div className={styles.logo}>
        <picture>
          <img src={logo} srcSet={`${logo} 320w`} alt="" />
        </picture>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
      <MagnetComponent {...magnet} />
    </div>
  );
};

const MagnetDefaultLayout = ({ content, children }: MagnetDefault) => {
  return (
    <>
      <div className={styles.content}>{content}</div>
      {children}
    </>
  );
};

const MagnetDoubleLayout = ({
  content,
  children,
  subTitle,
  subDescription,
  footer,
}: MagnetDouble) => {
  return (
    <>
      <div className={styles.content}>{content}</div>
      {children}
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.subDescription}>{subDescription}</div>
      <div className={styles.footer}>{footer}</div>
    </>
  );
};

const MagnetTripleLayout = ({
  content,
  cta,
  footnote,
  subImage,
  children,
  footer,
}: MagnetTriple) => {
  return (
    <>
      <div className={styles.content}>{content}</div>
      <div className={styles.cta}>
        <Button label={cta || "Click"} />
      </div>
      <div className={styles.footnote}>{footnote}</div>
      {subImage.map((image) => {
        return (
          <div className={styles.subImage} key="index">
            <picture>
              <img src={image} srcSet={`${image} 320w`} alt="" />
            </picture>
          </div>
        );
      })}
      {children}
      <div className={styles.footer}>{footer}</div>
    </>
  );
};

const MagnetGridLayout = ({ content, children, footer }: MagnetGrid) => {
  return (
    <>
      <div className={styles.content}>{content}</div>
      {children}
      <div className={styles.footer}>{footer}</div>
    </>
  );
};
