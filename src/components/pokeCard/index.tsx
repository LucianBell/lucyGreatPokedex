import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "@/styles/Home.module.scss";
import { green } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";

export default function MultiActionAreaCard({ name, image, types }: any) {
  const multipleTypes = (types: any) => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    } else {
      return types[0].type.name;
    }
  };

  const typeColor = (types: any) => {
    if (types[0].type.name == "grass") {
      return styles.typeGrass;
    } else if (types[0].type.name == "fire") {
      return styles.typeFire;
    } else if (types[0].type.name == "water") {
      return styles.typeWater;
    } else if (types[0].type.name == "bug") {
      return styles.typeBug;
    } else if (types[0].type.name == "normal") {
      return styles.typeNormal;
    } else if (types[0].type.name == "poison") {
      return styles.typePoison;
    } else if (types[0].type.name == "electric") {
      return styles.typeElectric;
    } else if (types[0].type.name == "ground") {
      return styles.typeGround;
    } else if (types[0].type.name == "fairy") {
      return styles.typeFairy;
    } else if (types[0].type.name == "fighting") {
      return styles.typeFight;
    } else if (types[0].type.name == "psychic") {
      return styles.typePsychic;
    } else if (types[0].type.name == "rock") {
      return styles.typeRock;
    } else if (types[0].type.name == "ghost") {
      return styles.typeGhost;
    } else if (types[0].type.name == "ice") {
      return styles.typeIce;
    } else if (types[0].type.name == "dragon") {
      return styles.typeDragon;
    } else if (types[0].type.name == "steel") {
      return styles.typeSteel;
    } else {
      return styles.typeDark;
    }
  };

  const favoriteStatus = false;

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
            className={typeColor(types)}
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
        <Button size="small" className={styles.shareBtn}>
          <FavoriteBorderOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
