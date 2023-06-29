import { FunctionComponent, useState } from "react";
import styles from "./SiteHeader.module.scss";
import { ReactComponent as LogoType } from "../../images/inline-svgs/ag-grid-logotype.svg";
import LogoMark from "../logo/LogoMark";

export const SiteLogo: FunctionComponent = () => {
    const [isLogoHover, setIsLogoHover] = useState(false);

    return (
        <a
            href="/"
            aria-label="Home"
            className={styles.headerLogo}
            onMouseEnter={() => {
                setIsLogoHover(true);
            }}
            onMouseLeave={() => {
                setIsLogoHover(false);
            }}
        >
            <LogoType />
            <LogoMark bounce={isLogoHover} />
        </a>
    );
};
