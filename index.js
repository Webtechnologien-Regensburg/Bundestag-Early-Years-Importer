/* eslint-env node */

import DatabaseImporter from "./lib/DatabaseImporter.js";
import SpeechParser from "./lib/SpeechParser.js";

let dbFile = process.argv[2],
    dataPath = process.argv[3];

function onSpeechParsed(movie) {
    DatabaseImporter.importSpeech(movie);
}

function onDatabaseReady() {
    SpeechParser.setSpeechParserListener(onSpeechParsed);
    SpeechParser.parseSpeechesFrom(dataPath);
}

DatabaseImporter.prepare(dbFile, onDatabaseReady);