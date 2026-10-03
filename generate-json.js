const { fetchImageUrls } = require('google-photos-album-image-url-fetch');
const fs = require('fs');

(async () => {
    // https://photos.app.goo.gl/xHDn3PftZaL78Ua17 -> replace with new FONEL ambum created by official website TODO
  const results = await fetchImageUrls('https://photos.app.goo.gl/xHDn3PftZaL78Ua17');
  const images = results.map(r => r.url + '=w1000');
  fs.writeFileSync('images.json', JSON.stringify({ images }, null, 2));
  console.log(`Wrote ${images.length} images`);
})();