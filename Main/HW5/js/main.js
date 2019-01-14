function start() {
    var book1 = new AudioBook('ASP.NET', 'C# .NET programming', 23, 'TUT.BY', false, true, 'Undefined :)', true, false);

    var str = JSON.stringify(book1);

    event = JSON.parse(str);
    event2 = JSON.parse(event)

    // var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
    // var obj = JSON.parse(text);

    console.log(str + "return toJSON");
    console.log(event + "first parse");
    console.log(event2 + "second parse");
    console.log(event2.name);
    //console.log(obj.name);
}


function Book(name, science, pagesCount, publicher, hindingType, avaliability, author, onCD, onDVD) {

    name = name;
    science = science;
    pagesCount = pagesCount;
    publicher = publicher;
    hindingType = hindingType;
    avaliability = avaliability;
    author = author;
    onCD = onCD;
    onDVD = onDVD;

    this.getName = function () {
        return name;
    }
    this.setName = function (value) {
        this.name = value;
    }

    this.getScience = function () {
        return science;
    }
    this.setScience = function (value) {
        this.science = value;
    }

    this.getPagesCount = function () {
        return pagesCount;
    }
    this.setPagesCount = function (value) {
        this.pagesCount = value;
    }

    this.getPusblisher = function () {
        return publicher;
    }
    this.setPublisher = function (value) {
        this.publicher = value;
    }

    this.getHindingType = function () {
        return hindingType;
    }
    this.setHindingType = function (value) {
        this.hindingType = value;
    }

    this.getAvaliability = function () {
        return avaliability;
    }
    this.setAvaliability = function (value) {
        this.avaliability = value;
    }


    this.getAuthor = function () {
        return author;
    }
    this.setAuthor = function (value) {
        this.author = value;
    }

    this.getOnCD = function () {
        return onCD;
    }
    this.setOnCD = function (value) {
        this.onCD = value;
    }

    this.getOnDVD = function () {
        return onDVD;
    }
    this.setOnDVD = function (value) {
        this.onDVD = value;
    }

    this.toJSON = function (value) {
        var res = "".concat('{ "name":"', this.getName(), '", ' +
            '"science":"', this.getScience(), '", ' +
            '"pagesCount":"', this.getPagesCount(), '", ' +
            '"publisher":"', this.getPusblisher(), '", ' +
            '"hindingType":"', this.getHindingType(), '", ' +
            '"avaliability":"', this.getAvaliability(), '", ' +
            '"author":"', this.getAuthor(), '", ' +
            '"onCD":"', this.getOnCD(), '", ' +
            '"onDVD":"', this.getOnDVD(), '"}');
        console.log(res);

        return res;
    }

}

function AudioBook(name, science, pagesCount, publicher, hindingType, avaliability, author, onCD, onDVD, audioFormat) {

    Book.call(this, name, science, pagesCount, publicher, hindingType, avaliability, author, onCD, onDVD);

    audioFormat = audioFormat;

    this.getAudioFormat = function () {
        return audioFormat;
    }
    this.setAudioFormat = function (value) {
        audioFormat = value;
    }


}

function TextBook(name, science, pagesCount, publicher, hindingType, avaliability, author, onCD, onDVD, laguage) {

    Book.call(this, name, science, pagesCount, publicher, hindingType, avaliability, author, onCD, onDVD);

    language = laguage;

    this.getLanguage = function () {
        return language;
    }
    this.setLanguage = function (value) {
        language = value;
    }

}