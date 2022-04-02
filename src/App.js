import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const getMeme = async () => {
    setLoading(true);
    const response = await axios.get("https://meme-api.herokuapp.com/gimme");
    setImage(response.data.preview[2]);
    setLoading(false);
  };
  useEffect(() => {
    getMeme();
  }, []);

  return (
    <>
      <Grid container style={{ marginTop: 20 }}>
        <Grid item style={{ margin: "auto" }}>
          <Card>
            {loading == true ? <LinearProgress /> : ""}
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h5">Memes App</Typography>
              {image && image != null ? (
                <CardMedia
                  component="img"
                  height="300"
                  width="90%"
                  image={image}
                ></CardMedia>
              ) : (
                <div style={{ margin: "10px 5px" }}>
                  Meme nahi sapadli re...Button vr click kr...!!
                </div>
              )}
              <Button
                variant="outlined"
                style={{ marginTop: 20 }}
                onClick={() => getMeme()}
              >
                Get A New Meme
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
