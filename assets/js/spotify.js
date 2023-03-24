const CLIENT_ID = "0726ad244296449e955e711fb74a6ecd";
const CLIENT_SECRET = "71804325ca37462f869a0c546f58fd4a";

const getToken = async () => {
  const formData = new URLSearchParams();

  formData.append("grant_type", "client_credentials");
  const res = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${new Buffer(
          CLIENT_ID + ":" + CLIENT_SECRET
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      // body: formData,
    }
  );

  const result = await res.json();

  console.log("resukt ", result);
};

getToken();

const getCurrentPlaying = async () => {
  const res = await fetch(
    "https://api.spotify.com/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${""}`,
        "Content-Type": "application/json",
      },
    }
  );
};
