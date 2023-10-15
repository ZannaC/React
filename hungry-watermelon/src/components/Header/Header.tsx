import { FC } from "react";
import HeaderCartButton from "./HeaderCartButton";
import cartImage from "../../assets/mealsBackground.jpg";
import classes from "./Header.module.css";

interface HeaderProps {
  onShowCart: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.choise}>
          Make your choice{" "}
          <div className={classes["emoji-container"]}>
            <span className={classes.emoji}>👀</span>
            <span className={classes["emoji-watermelon"]}>🍉</span>
          </div>
        </h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={cartImage} alt="meals background" />
      </div>
    </>
  );
};

export default Header;
