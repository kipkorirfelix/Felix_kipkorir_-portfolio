import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  "public/img/background_layer/1_Clouds.png",
  "public/img/background_layer/2_Mountains.png",
  "public/img/background_layer/3_Mountains.png",
  "public/img/background_layer/4_Mountains.png",
  "public/img/background_layer/5_Birds.png",
  "public/img/background_layer/6_Birds.png",
  "public/img/background_layer/7_Bridge.png",
  "public/img/background_layer/8_Forest.png",
  "public/img/background_layer/9_Forest.png",
  "public/img/projects/ArticlesAPI.jpg",
  "public/img/projects/RoadAccidentPrediction.jpg",
  "public/img/projects/VoterPredictionSystem.jpg",
];

const favicon = "public/img/favicon.png";

async function toWebp(source) {
  const parsed = path.parse(source);
  const target = path.join(parsed.dir, `${parsed.name}.webp`);

  await sharp(source)
    .webp({
      effort: 6,
      quality: 78,
      smartSubsample: true,
    })
    .toFile(target);

  return target;
}

async function main() {
  await Promise.all(images.map(toWebp));

  await mkdir("public/img/icons", { recursive: true });
  await sharp(favicon)
    .resize(48, 48, { fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toFile("public/img/icons/favicon-48.png");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
