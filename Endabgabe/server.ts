import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Jonas_EIA2 {
    interface Entry {
        [type: string]: string | string[] | number;
    }
    let entries: Mongo.Collection;
    let databaseURL: string;

    let dbName: string = "Zauberbilddatenbank";
    let dbCollection: string = "artworks";

    
    databaseURL = "mongodb+srv://zauberbild123:zauberbild123@cluster0-oy8uv.mongodb.net/Zauberbilddatenbank?retryWrites=true&w=majority";
    

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    startServer(port);
    console.log("Server starting on port: " + port);

    interface AssocStringString {
        [key: string] : string;
    }

    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        entries = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database 2.1 connection is ", entries != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Klappt die Anfrage?");
        let query: AssocStringString = <AssocStringString>Url.parse (_request_ur, true).query;
        let command: string = query["command"];

        switch (command) {
            case "insert":
                let Canvas: CanvasElement = {

                };
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