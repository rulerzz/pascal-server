let userImageData = [
    { name: "Kazuha", imageUrl: "https://images.alphacoders.com/115/1150213.png", description: "A swordsman", type: "anemo" },
    { name: "Xiao", imageUrl: "https://images5.alphacoders.com/129/1292433.jpg", description: "A Yaksha", type: "anemo" },
    { name: "Shenhe", imageUrl: "https://images5.alphacoders.com/120/1200477.jpg", description: "A human", type: "cryo" },
    { name: "Jean", imageUrl: "https://images2.alphacoders.com/106/1064544.jpg", description: "Acting Grandmaster", type: "anemo" },
    { name: "Diluc", imageUrl: "https://images.alphacoders.com/110/1109227.jpg", description: "The Dark Knight", type: "pyro" },
    { name: "Ningguang", imageUrl: "https://images3.alphacoders.com/110/1102108.jpg", description: "The Liyue Qixing", type: "geo" }]

html = function (req, res) {
    // Accept text/html
    res.render("templates/index", { pageTitle: "Welcome to p360", websiteBrandName: "P360 Solutions", userdata: userImageData, session: req.session?.user })
};

text = function (req, res) {
     // Accept text/plain
    res.send("hello world");
};

json = function (req, res) {
     // Accept application/json
    res.json(userImageData);
};

module.exports = { html, text, json };