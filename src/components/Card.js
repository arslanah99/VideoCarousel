import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
import Axios from "axios";

export default function MediaCard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    await Axios.get("https://randomuser.me/api").then((res) => {
      setData(res.data);
      setIsLoading(true);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {isLoading ? (
        <CardMedia
          component="img"
          height="200"
          image={data?.results[0].picture.large}
          alt="green iguana"
        />
      ) : (
        <Skeleton
          variant="rectangle"
          animation="wave"
          width={345}
          height={200}
        />
      )}

      <CardContent>
        {isLoading ? (
          <Typography gutterBottom variant="h5" component="div">
            {data && data.results[0].name.first}{" "}
            {data && data.results[0].name.last}
          </Typography>
        ) : (
          <Skeleton
            animation="wave"
            height={40}
            width="80%"
            style={{ marginBottom: 6, marginLeft: "auto", marginRight: "auto" }}
          />
        )}

        {isLoading ? (
          <Typography gutterBottom variant="body2" component="div">
            {data && data.results[0].email}
            <br />
            {data && data.results[0].phone}
          </Typography>
        ) : (
          <div>
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{
                marginBottom: 6,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{
                marginBottom: 6,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
