const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');

// Sets up the Express App

const app = express();
const PORT = 3000;

const reservation = [
    {
        table: 1,
        name: 'Yoda',
        phoneNumber: 469-469-4690,
        Email: "yoda@gmail.com",
        uniqueId: ydacoolas151,
    },
    {
        table: 2,
        name: 'chicken',
        phoneNumber: 469-314-4500,
        Email: "chickenemail@gmail.com",
        uniqueId: chicken41,
    },
    {
        table: 3,
        name: 'monkey',
        phoneNumber: 469-220-4580,
        Email: "moneky@gmail.com",
        uniqueId: monkey51,
    },
  ];













// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));