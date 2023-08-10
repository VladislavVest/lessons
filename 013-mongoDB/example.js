const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
const log = console.log;

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// mongoose.connect(`mongodb+srv://user:${process.env.DB_PASS}@cluster0-bpnma.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
// // mongoose.connect('mongodb://127.0.0.1/ibanan', {
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     // useFindAndModify: false
// })
//     .then(() => log('\n DB Connected!'))
//     .catch(err => log(`DB Connection Error: ${err.message}`));