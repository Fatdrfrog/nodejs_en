const express = require("express");

const app = express();

const songs = [
  {
    id: 1,
    name: "Muz",
  },
  {
    id: 2,
    name: "Kaytadan",
  },
  {
    id: 3,
    name: "Ayiptama",
  },
  {
    id: 4,
    name: "Senyorita",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(songs);
});

app.post("/", (req, res) => {
  const newSong = { id: songs.length + 1, name: req.body.newSong.name };

  songs.push(newSong);
  res.status(200).json(songs);
});

app.put("/:songID", (req, res) => {
  const songID = parseInt(req.params.songID);
  const songName = req.query.name;

  const changedSongs = songs.map((song) => {
    if (song.id === songID) {
      return { ...song, name: songName };
    } else return song;
  });

  res.status(200).json(changedSongs);
});

app.delete("/", (req, res) => {
  res.send("DELETE");
});

app.listen(5000);
