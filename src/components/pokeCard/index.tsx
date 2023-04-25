import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "@/styles/Home.module.scss";

export default function MultiActionAreaCard({ name, image, types }: any) {
  const multipleTypes = (types: any) => {
    if (types[1]) {
      return types[0].type.name + " " + types[1].type.name;
    } else {
      return types[0].type.name;
    }
  };

  return (
    <Card sx={{ maxWidth: 345, marginRight: "1em", marginBottom: "1em" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Pokemon Sprite"
        />
        <CardContent>
          <Typography
            className={styles.name}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            className={styles.typeName}
            variant="body2"
            color="text.secondary"
          >
            {multipleTypes(types)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actionArea}>
        <Button size="small" className={styles.shareBtn}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
