const mongoose = require('mongoose');
const Chat = require('./models/chat.js')

main().then(() => {
    console.log("connection Successfull");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
};

const date = new Date();

Chat.insertMany([
    {
        from: "Alice",
        to: "Bob",
        mess: "Hey, how's it going?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Bob",
        to: "Alice",
        mess: "Not bad, just working on some projects.",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Charlie",
        to: "Alice",
        mess: "Hello! What's up?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Alice",
        to: "Charlie",
        mess: "Hi there! Just enjoying my day.",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "David",
        to: "Alice",
        mess: "Good afternoon! Any plans for the weekend?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Alice",
        to: "David",
        mess: "Not sure yet, maybe some outdoor activities.",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Eve",
        to: "Bob",
        mess: "Hey Bob! How's your day so far?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Bob",
        to: "Eve",
        mess: "It's been busy, but good. How about yours?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Frank",
        to: "Alice",
        mess: "Hi Alice! Long time no see. How have you been?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Alice",
        to: "Frank",
        mess: "I've been well, thanks! How about you?",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      },
      {
        from: "Frank",
        to: "Alice",
        mess: "I've been well, Thanks",
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
      }
])
