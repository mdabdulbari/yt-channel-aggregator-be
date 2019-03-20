var Channel = require('../models/channel');
const fs = require('fs');
const csv = require('csv-parser');

function addChannel(rank, grade, channelName, videoUploads, subscribers, videoViews) {
    var channelToSave = new Channel({
        rank: rank,
        grade: grade,
        channelName: channelName,
        videoUploads: videoUploads,
        subscribers: subscribers,
        videoViews: videoViews
    });

    channelToSave.save(function (err, channel) {
        if (err) return console.error(err);
        console.log(channel.channelName + " saved channel");
    });
}

function dumpInitData() {

    fs.createReadStream("./db/initData.csv")
        .pipe(csv())
        .on('data', function (data) {
            try {
                const { rank, grade, channelName, videoUploads, subscribers, videoViews } = data;
                addChannel(rank, grade, channelName, videoUploads, subscribers, videoViews);
            }
            catch (err) {
            }
        })
        .on('end', function () {
            //some final operation
        });
    // 
}

module.exports = dumpInitData;
