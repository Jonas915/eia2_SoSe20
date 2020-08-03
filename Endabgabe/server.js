"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Jonas_EIA2;
(function (Jonas_EIA2) {
    let entries;
    let databaseURL;
    let dbName = "Zauberbilddatenbank";
    let dbCollection = "artworks";
    databaseURL = "mongodb+srv://zauberbild123:zauberbild123@cluster0-oy8uv.mongodb.net/Zauberbilddatenbank?retryWrites=true&w=majority";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    console.log("Server starting on port: " + port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(_url, options);
            yield mongoClient.connect();
            entries = mongoClient.db(dbName).collection(dbCollection);
            console.log("Database 2.1 connection is ", entries != undefined);
        });
    }
    function handleRequest(_request, _response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Klappt die Anfrage?");
            let query = Url.parse(_request_ur, true).query;
            let command = query["command"];
            switch (command) {
                case "insert":
                    let Canvas = {};
                    DatabaseURL.insert(Canvas);
                    respond(_response, "Bild gespeichert");
                    break;
                case "find":
                    databaseURL.findAll(findCallback);
                    break;
                default:
                    respond(_response, "unknown command" + command);
                    break;
            }
        });
    }
})(Jonas_EIA2 = exports.Jonas_EIA2 || (exports.Jonas_EIA2 = {}));
//# sourceMappingURL=server.js.map