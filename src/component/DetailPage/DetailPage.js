import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";
import classes from "./DetailPage.module.css";
import Location from "../../UI/Icon/Icon";
import Button from "../../UI/Button/Button";

const dummy = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const DetailPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.detail}>
        {/* Header Main */}
        <div className={classes.header}>
          <div className={classes.info}>
            <h2 className={classes.name}>{dummy.name}</h2>
            <p className={classes.address}>
              <Location /> {dummy.address}
            </p>
            <p className={classes.distance}>{dummy.distance}</p>
            <p className={classes.price}>{dummy.price}</p>
          </div>
          <div>
            <Button className={classes.btn}>Reserve or Book Now!</Button>
          </div>
        </div>
        {/* img group */}
        <div className={classes["img-group"]}>
          {dummy.photos.map((imgPath) => (
            <img className={classes.img} src={imgPath} />
          ))}
        </div>
        {/* more */}
        <div className={classes.more}>
          <div className={classes.content}>
            <h2 className={classes.title}>{dummy.title}</h2>
            <p className={classes.description}>{dummy.description}</p>
          </div>
          <div className={classes.box}>
            <h4 className={classes.title}>Perfect for a 9-night stay!</h4>
            <p className={classes.context}>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <p className={classes.price}>
              <b>${dummy.nine_night_price}</b>
              (9 nights)
            </p>
            <Button className={classes.btn}>Reserve or Book Now!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
