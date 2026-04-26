const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD is LIVE! and it took a hell lot of time to make it happen. well this txt is visible in the output no one cares about. But it really took a lot of time to make it happen.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});