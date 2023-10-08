import { Button } from "./Button";
import styles from "./header.module.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className={styles.header}>
      <div className={styles.masthead}>d4v3w Demos</div>
      {user ? (
        <div className={styles.login}>
          {user ? (
            <>
              <span className={styles.welcome}>{user.name}!</span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      ) : null}
    </div>
  </header>
);
