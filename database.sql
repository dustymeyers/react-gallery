--Run this SQL text in a database called react_gallery

DROP TABLE IF EXISTS "gallery";

CREATE TABLE "gallery"(
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR(1024) NOT NULL,
  "description" VARCHAR(1024) NOT NULL,
  "likes" INTEGER DEFAULT 0;
);