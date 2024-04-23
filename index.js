const mongoose = require("mongoose");
const Hotel = require("./models/hotel.model");
const { initializeDatabase } = require("./db/db.connect");

initializeDatabase();

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel-photo1.jpg",
    "https://example.com/hotel-photo2.jpg",
  ],
};

const newHotel2 = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: [
    "https://example.com/hotel1-photo1.jpg",
    "https://example.com/hotel1-photo2.jpg",
  ],
};

const newHotel3 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};

async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const saveHotel = await hotel.save();
    console.log("Hotel Saved: ", saveHotel);
  } catch (error) {
    throw error;
  }
}
// createHotel(newHotel);
// createHotel(newHotel2);
// createHotel(newHotel3);

async function readAllHotels() {
  try {
    const hotel = await Hotel.find();
    console.log(hotel, hotel.length);
  } catch (error) {
    throw error;
  }
}
// readAllHotels();

//4. Create a function to read a hotel by its name ("Lake View"). Console the restaurant details of Lake View hotel. Use proper function and variable names.

async function hotelByName(hotelName) {
  try {
    const hotel = await Hotel.findOne({ name: hotelName });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}
// hotelByName("Lake View");

//5. Create a function to read all hotels which offers parking space. Console all the hotel details.

async function hotelByParking() {
  try {
    const hotel = await Hotel.find({ isParkingAvailable: true });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}
// hotelByParking();

//6. Create a function to read all hotels which has restaurant available. Console all the hotels.

async function hotelByRestaurant() {
  try {
    const hotel = await Hotel.find({ isRestaurantAvailable: true });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}
// hotelByRestaurant();

//7. Create a function to read all hotels by category ("Mid-Range"). Console all the mid range hotels.

async function hotelsByCategory(category) {
  try {
    const hotel = await Hotel.find({ category: category });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}
// hotelsByCategory("Mid-Range");

//8. Create a function to read all hotels by price range ("$$$$ (61+)"). Console all the hotels.

async function hotelByPrice(price) {
  try {
    const hotel = await Hotel.find({ price: price });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}

// hotelByPrice("$$$$ (61+)");

//9. Create a function to read all hotels with 4.0 rating. Console the hotels.

async function hotelByRating(rating) {
  try {
    const hotel = await Hotel.find({ rating: rating });

    console.log(hotel);
  } catch (error) {
    throw error;
  }
}
// hotelByRating("4.0");

//Create a function to read a hotel by phone number ("+1299655890"). Console the hotel data.

async function hotelByPhone(phno) {
  try {
    const hotel = await Hotel.findOne({ phoneNumber: phno });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}
// hotelByPhone("+1299655890");

//1. Create a function that accepts a hotel ID and an object with updated data, and updates the hotel data with the provided ID. Take the _id of the hotel from your database which has the name Lake View and update its checkOutTime to 11 AM. Console the updated hotel.

async function updateHotelCheckoutTime(hotelId, newTime) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, newTime, {
      new: true,
    });
    console.log(updatedHotel);
  } catch (error) {
    throw error;
  }
}
// updateHotelCheckoutTime("6625ef326ad1fbfadb83a424", {
//   checkOutTime: "11:00 AM",
// });

//2. Create a function that accepts a hotel name and an object with updated data, and updates the hotel data. Take the hotel which has the name "Sunset Resort" and update its rating to 4.2. Console the updated hotel.

async function updateHotelRatings(hotelName, newRating) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { name: hotelName },
      newRating,
      { new: true },
    );
    console.log(updatedHotel);
  } catch (error) {
    throw error;
  }
}

// updateHotelRatings("Sunset Resort", { rating: 4.2 });

//3. Create a function that accepts a hotel's phone number and an object with updated data, and updates the hotel data. Take the hotel which has the phone number "+1299655890" and update its phone number  to "+1997687392". Console the updated hotel details.

async function updateHotelPhno(phno, newPhno) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { phoneNumber: phno },
      { phoneNumber: newPhno },
      {new : true}
    );
    console.log(updatedHotel)
  } catch (error) {
    throw error;
  }
}
updateHotelPhno("+1299655890", "+1997687392");
