import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Link from "next/link";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardBlog from "../../components/Card/CardBlog";
import usePagination from "../../components/Pagination/paginationBuilder";
import styles from "../../styles/Home.module.css";
import { default as blogData } from "../api/blogData.json";
import CommonFooter from "../../components/Footer/CommonFooter";

export default function BlogHome() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(blogData.length / PER_PAGE);
  const _DATA = usePagination(blogData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ paddingTop: "1rem" }}
          >
            <Grid item>
              <AutoStoriesIcon color="primary" fontSize="large" />
            </Grid>
            <Grid item sx={{ padding: "0 0 0 1rem" }}>
              <h3 className={styles.greyText}>The Chronicles of Bodhi</h3>
            </Grid>
          </Grid>

          <Grid>
            <Paper
              elevation={8}
              sx={{ marginTop: "0.5rem", padding: "0.5rem" }}
            >
              <Box>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
                    <Pagination
                      count={count}
                      size="large"
                      page={page}
                      variant="outlined"
                      shape="rounded"
                      onChange={handleChange}
                      color="primary"
                    />
                  </Grid>
                  {_DATA.currentData().map((blog, index) => (
                    <Grid item key={index}>
                      <CardBlog
                        author={blog.author}
                        date={blog.date}
                        title={blog.title}
                        message={blog.content}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            className={styles.spacerOne}
          >
            <Grid item>
              <div>
                <Link href="/">
                  <a>
                    <Button variant="contained" className={styles.buttonLaunch}>
                      BACK TO HOME
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CommonFooter />
    </Box>
  );
}
