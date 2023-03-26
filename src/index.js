const { error } = require('console')
const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

app.use('/static', express.static('assets'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.urlencoded({ extended: false }))
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret'
}));
app.use(cookieParser('key1'));
// app.use(cookieSession({
//     name: 'session',
//     keys: ['asdf', '1234'],
//     // Cookie Options
//     maxAge: 5 * 1000 // 24 hours
// }))

const port = 3000

// Content Negotiation 
// function format(path) {
//     var obj = require(path);
//     return function (req, res) {
//         res.format(obj);
//     };
// }

// app.get('/', format('./middlewares/indexContentNegotiator'))

app.get('/', (req, res) => {
    let userImageData = [
        { name: "Kazuha", imageUrl: "https://images.alphacoders.com/115/1150213.png", description: "A swordsman", type: "anemo" },
        { name: "Xiao", imageUrl: "https://images5.alphacoders.com/129/1292433.jpg", description: "A Yaksha", type: "anemo" },
        { name: "Shenhe", imageUrl: "https://images5.alphacoders.com/120/1200477.jpg", description: "A human", type: "cryo" },
        { name: "Jean", imageUrl: "https://images2.alphacoders.com/106/1064544.jpg", description: "Acting Grandmaster", type: "anemo" },
        { name: "Diluc", imageUrl: "https://images.alphacoders.com/110/1109227.jpg", description: "The Dark Knight", type: "pyro" },
        { name: "Ningguang", imageUrl: "https://images3.alphacoders.com/110/1102108.jpg", description: "The Liyue Qixing", type: "geo" }]
    res.render("templates/index", { pageTitle: "Welcome to p360", websiteBrandName: "P360 Solutions", userdata: userImageData, session: req.session?.user })
})


app.get('/login', (req, res) => {
    if (req.session.user)
        res.redirect('/dashboard')
    else if (req.query.retry)
        res.render("templates/login", { pageTitle: "Welcome to p360", websiteBrandName: "P360 Solutions", loginError: true, session: req.session?.user })
    else
        res.render("templates/login", { pageTitle: "Welcome to p360", websiteBrandName: "P360 Solutions", loginError: false, session: req.session?.user })
})

app.get('/dashboard', (req, res) => {
    console.log(req.cookies)
    if (!req.session.user)
        res.redirect('/login')
    else
        res.render("templates/dashboard", { pageTitle: "Dashboard", websiteBrandName: "P360 Solutions", session: req.session?.user, session_start_time: req.session.start_time })
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.clearCookie('loggedin');
    // req.session = null
    res.redirect('/login')
})

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '../assets/images/anemo.png'))
})

app.post('/login-process', (req, res) => {
    if (req.body.email === 'test@gmail.com' && req.body.password === 'asdf1234') {
        // display dashboard & begin session
        req.session.user = req.body.email
        req.session.start_time = Date.now()
        res.cookie('loggedin', true)
        res.redirect('/dashboard')
    }
    else {
        //  Take back to login with error
        res.redirect('/login?retry=true')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
