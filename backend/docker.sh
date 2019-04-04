docker pull cockroachdb/cockroach:v2.1.6


docker run -d \
--name=guestbook \
-p 26257:26257 -p 9090:8080  \
-v "${HOME}/cockroach-data/guestbook:/cockroach/cockroach-data"  \
cockroachdb/cockroach:v2.1.6 start --insecure


docker exec -it guestbook ./cockroach sql --insecure

CREATE DATABASE guestbook;
CREATE TABLE pictures(
    id INT,
    book_id INT,
    image_url STRING,
    );


insert into pictures values(1,1,'http://res.cloudinary.com/demo/image/upload/v1362144095/sample_attachment.jpg');
insert into pictures values(2,1,'http://image.downloadwap.co.uk/wallpapers/wp/new/40/rose_IwcNjUWl0e.jpg');
insert into pictures values(3,1,'https://c.pxhere.com/photos/51/d2/flower_peonies_blossom_blooming_plant_spring_summer_petals-562249.jpg!d');
insert into pictures values(4,1,'https://c.pxhere.com/photos/a6/cb/plants_flowers_peonies_paeonia_lactiflora_pink_petald_flower_gardens_pot-616650.jpg!d');
