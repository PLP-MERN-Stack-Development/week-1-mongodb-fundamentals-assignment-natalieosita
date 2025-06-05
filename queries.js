// Query to find books of a specific genre
db.books.find({ genre: "Fiction" });

// Query to find books published after a certain year 
db.books.find({ published_year: { $gt: 2010 } });

// Query to find books by a specific author
db.books.find({ author: "George Orwell" });

// Query to update the price of a specific book
db.books.updateOne({ title: "A Minute To Midnight" }, { $set: { price: 22 } });

// Query to delete a book by its title
db.books.deleteOne({ title: "Educated" });


// ADVANCED QUERIES
// Query to find books that are in stock and published after 2010
db.books.find({ $and: [{ in_stock: true }, { published_year: { $gt: 2010 } }] });

// Query for projection to return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Query for sorting books by price 
db.books.find().sort({ price: 1 }); // Ascending
db.books.find().sort({ price: -1 }); // Descending

// Query for pagination 
db.books.find().skip(5).limit(5);


// AGGREGATION PIPELINE
// To calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// To find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// To group books by publication decade and count them
db.books.aggregate([
  { $project: { decade: { $floor: { $divide: ["$published_year", 10] } } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } }
]);


// INDEXING
// Create an index on the title field
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Use explain() to analyze performance
db.books.find({ title: "A Minute To Midnight" }).explain("executionStats");

