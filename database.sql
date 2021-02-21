-- Run this SQL text in a database called react_gallery
-- Will remove table if executed
DROP TABLE IF EXISTS "gallery";

-- This table holds all gallery data
CREATE TABLE "gallery"(
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR(255) NOT NULL,
  "description" VARCHAR(255) NOT NULL,
  "likes" INTEGER DEFAULT 0;
);

-- Insert data into table to populate
INSERT INTO "gallery"
  ("path", "description")
Values
  ('images/GoatMount.jpg', 'A leather-bound warrior striding into battle atop Gargantuan Gordie.'),
  ('images/SpookyGoat.jpg', 'An image of a goat I would never want to meet in the wild... or anywhere really.'),
  ('images/StridingGoat.png', 'This goat''s running so fast, he''s got grass stuck to him.'),
  ('images/SatyrLibationer.png', 'Latreus the lingering libationer.'),
  ('images/ImReallyNotSureButGoat.jpg', 'I''m not actually sure what''s going on here, but there is a goat.'),
  ('images/GoatLookingInMirrorForFirstTime.jpg', 'Father Goat Misty seeing his face for the first time.'),
  ('images/SatyrDrummer.jpg', 'Skiphoof the Bard gets a +10 to Performance(Charisma) Checks.'),
  ('images/SmokingGoat.jpg', 'Grove pondering over a smoke.'),
  ('images/IsThisAGoat.jpg', 'Like this post if you agree this is definitely a goat.'),
  ('images/HercuSatyr.png', 'Big ''ole strong boy showing off his bow.'),
  ('images/Dwarven_Goat_Rider.jpg', 'A Dwarven Warrior mounted on Glorious Gary.'),
  ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');
