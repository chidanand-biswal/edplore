import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardCustomOption from "../../components/Card/CardCustomOption";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";

export default function AuthHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar></MenuAppBar>
      <main className={styles.main}>
        <h2>educate | explore</h2>

        <p className={styles.description}>Login</p>

        <div className={styles.grid}>
          <Link href="/about" passHref>
            <a>
              <CardCustomOption
                title="Give it a try"
                message="Let me first see what the hype is all about !"
              />
            </a>
          </Link>
        </div>
      </main>

      {/*<footer className={styles.footer}>© 2021 BISWAL Technologies </footer>*/}
      <ToolbarFooter />
    </Box>
  );
}
