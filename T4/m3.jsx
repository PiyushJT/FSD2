const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/moviesDB")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));

// Movie Schema
const movieSchema = new mg.Schema({
    title: String,
    director: String,
    genre: String,
    rating: Number,
    releaseyear: Number,
    language: String,
    active: Boolean
});

const Movie = mg.model("Movie", movieSchema);

const operations = async () => {
    try {

        // 1.Insert multiple movie documents

        const movies = [
            {
                title: "Jawan",
                director: "Atlee",
                genre: "Action",
                rating: 8.7,
                releaseyear: 2023,
                language: "Hindi",
                active: true
            },
            {
                title: "3 Idiots",
                director: "Rajkumar Hirani",
                genre: "Drama",
                rating: 9.2,
                releaseyear: 2009,
                language: "Hindi",
                active: true
            },
            {
                title: "KGF",
                director: "Prashanth Neel",
                genre: "Action",
                rating: 8.8,
                releaseyear: 2018,
                language: "Kannada",
                active: true
            },
            {
                title: "RRR",
                director: "S. S. Rajamouli",
                genre: "Action",
                rating: 9.0,
                releaseyear: 2022,
                language: "Telugu",
                active: true
            },
            {
                title: "Drishyam",
                director: "Nishikant Kamat",
                genre: "Thriller",
                rating: 8.6,
                releaseyear: 2015,
                language: "Hindi",
                active: true
            },
            {
                title: "Dangal",
                director: "Nitesh Tiwari",
                genre: "Drama",
                rating: 8.9,
                releaseyear: 2016,
                language: "Hindi",
                active: true
            },
            {
                title: "Bahubali",
                director: "S. S. Rajamouli",
                genre: "Action",
                rating: 8.5,
                releaseyear: 2015,
                language: "Telugu",
                active: true
            },
            {
                title: "Pushpa",
                director: "Sukumar",
                genre: "Action",
                rating: 8.4,
                releaseyear: 2021,
                language: "Telugu",
                active: true
            },
            {
                title: "Shershaah",
                director: "Vishnuvardhan",
                genre: "Drama",
                rating: 8.3,
                releaseyear: 2021,
                language: "Hindi",
                active: true
            },
            {
                title: "Zindagi Na Milegi Dobara",
                director: "Zoya Akhtar",
                genre: "Drama",
                rating: 8.8,
                releaseyear: 2011,
                language: "Hindi",
                active: true
            }
        ];

        await Movie.insertMany(movies);
        console.log("Movies inserted successfully");


        // 2.Display all movies having rating >8.5

        const highRatedMovies = await Movie.find({
            rating: { $gt: 8.5 }
        });

        console.log("\nMovies having rating >8.5");
        console.log(highRatedMovies);


        // 3.Display title and rating of movie having second highest rating

        const secondHighestMovie = await Movie.find()
        .sort({ rating: -1 })
        .skip(1)
        .limit(1)
        

        console.log("\nSecond Highest Rating Movie");
        console.log(secondHighestMovie);


        // 4.Increase rating of all action movies by 0.2

        const updateRatings = await Movie.updateMany(
            { genre: "Action" },
            { $inc: { rating: 0.2 } }
        );

        console.log("\nAction Movie Rating Updated");
        console.log(updateRatings);


        // 5.Count total no of Hindi movies

        const hindiMovieCount = await Movie.countDocuments({
            language: "Hindi"
        });

        console.log("\nTotal Hindi Movies:", hindiMovieCount);


        // 6.Delete movie having title "Jawan"

        const deletedMovie = await Movie.deleteOne({
            title: "Jawan"
        });

        console.log("\nDeleted Movie:");
        console.log(deletedMovie);

    }
    catch(err){
        console.log("Error:", err);
    }
};

operations();