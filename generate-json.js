// const { fetchImageUrls } = require('google-photos-album-image-url-fetch');
// const fs = require('fs');

// (async () => {
//     // https://photos.app.goo.gl/xHDn3PftZaL78Ua17 -> replace with new FONEL ambum created by official website TODO
//   const results = await fetchImageUrls('https://photos.app.goo.gl/xHDn3PftZaL78Ua17');
//   const images = results.map(r => r.url + '=w1000');
//   fs.writeFileSync('images.json', JSON.stringify({ images }, null, 2));
//   console.log(`Wrote ${images.length} images`);
// })();

const { fetchImageUrls } = require('google-photos-album-image-url-fetch');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

(async () => {
  const results = await fetchImageUrls('https://photos.app.goo.gl/xHDn3PftZaL78Ua17');

  if (!fs.existsSync('images')) fs.mkdirSync('images');

  const localPaths = [];
  for (let i = 0; i < results.length; i++) {
    const res = await axios.get(results[i].url + '=w1000', { responseType: 'arraybuffer' });
    const filename = `images/google-photos/photo_${i}.jpg`;
    fs.writeFileSync(filename, res.data);
    localPaths.push(filename);
    console.log(`Downloaded ${i + 1}/${results.length}`);
  }

  fs.writeFileSync('images.json', JSON.stringify({ images: localPaths }, null, 2));
  console.log(`Done. Wrote ${localPaths.length} local images.`);
})();   