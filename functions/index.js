const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// [START all]
// [START trigger]
exports.outputEventLog = functions.analytics.event('button_tap').onLog( event => {
// [END trigger]
    console.log(event);
})
// [END all]
