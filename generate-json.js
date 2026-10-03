const { fetchImageUrls } = require('google-photos-album-image-url-fetch');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

(async () => {
    const results = await fetchImageUrls('https://photos.app.goo.gl/xHDn3PftZaL78Ua17');

    // Remove old images or create directory
    const dir = 'images/google-photos';
    fs.mkdirSync(dir, { recursive: true });
    for (const file of fs.readdirSync(dir)) {
        if (file.startsWith('photo_')) {
            fs.unlinkSync(path.join(dir, file));
        }
    }

    // get the img, download to images/google-photos folder
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