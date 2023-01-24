import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "../../styles/Home.module.css";

export default function CardBlog(props) {
  return (
    <Box>
      <Card variant="outlined" className={styles.cardBlog}>
        <React.Fragment>
          <CardContent>
            <Box>
              <h2>{props.title}</h2>
            </Box>
            <Box>
              <Typography>{props.author}</Typography>
            </Box>
            <Box>
              <Typography>{props.date}</Typography>
            </Box>
            <Box>
              <Typography color="text.secondary" sx={{ paddingTop: "0.5rem" }}>
                {props.message}
              </Typography>
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
