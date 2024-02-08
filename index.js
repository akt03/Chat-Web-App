const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');

const chat = require('./models/chat.js');
const { compile } = require('ejs');
// const Chat = require('./models/chat.js');
const port = 30;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// const chat1 = new chat({
//     from: "Abhinav",
//     to: "Ashish",
//     mess: "Hello, How are You?",
//     created_at: new Date()
// })

// const chat1 = new chat({
//     from: "Ashish",
//     to: "Abhinav",
//     mess: "I am Fine, How about you?",
//     created_at: new Date()
// });

// const chat1 = new chat({
//     from: "Abhinav",
//     to: "Ashish",
//     mess: "I am also fine, What are you doing?",
//     created_at: new Date()
// });

// chat1.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

main()
    .then(() => {
        console.log("Connection Successfull")
    }).catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
}



app.get("/", (req, res) => {
    res.render("button.ejs")
})

// Index Route
app.get("/chats", async (req,res)=>{
    const chats = await chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

// New Chat created
app.get("/chats/new",(req,res)=> {
    res.render("new.ejs");
})

// Post Method to show my new Chat
app.post("/chats",(req,res)=>{
    const {from,to,msg} = req.body;
    const date = new Date();
    const newChat = new chat({
        from: from,
        to: to,
        mess: msg, 
        date: date.toString().split(" ").slice(0,4).join(" "),
        time: date.toString().split(" ")[4]
    });
    // console.log(newChat);
    newChat.save()
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit",async (req,res)=> {
    const {id} = req.params;
    const chatId = await chat.findById(id);
    res.render("edit.ejs", { chatId });
})

// Update Route

app.put("/chats/:id", async (req,res)=>{
    const {id} = req.params;
    const {msg} = req.body;
    const dateAndTime = new Date();
    const date = dateAndTime.toString().split(" ").slice(0,4).join(" ");
    const time = dateAndTime.toString().split(" ")[4]



    const updatedChat = await chat.findByIdAndUpdate(id, {mess: msg , date: date , time: time}, {runValidators: true} , { new: true } );
    console.log(updatedChat);
    res.redirect("/chats");
});

// Delete Chat
app.delete("/chats/:id", async (req,res)=> {
    const {id} = req.params;
    const confirmDelete = req.query.confirmDelete;
    console.log(req.url);
    console.log(id);

    if (confirmDelete === 'true'){
        const deleteChat = await chat.findByIdAndDelete(id);
        console.log(deleteChat);
        res.redirect("/chats");
    } else {
        res.redirect('/chats');
    }
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}/`);
})