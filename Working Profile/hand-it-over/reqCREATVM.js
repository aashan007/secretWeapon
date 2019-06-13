var request = require('request');
var jsonDataObj = { "name": "instance-3", "sourceSnapshot": "projects/hand-it-over/global/snapshots/snapshot-of-instance-2", "sizeGb": "10", "type": "projects/hand-it-over/zones/us-east1-b/diskTypes/pd-standard", "zone": "projects/hand-it-over/zones/us-east1-b" }
request.post({
    url: "https://www.googleapis.com/compute/v1/projects/hand-it-over/zones/us-east1-b/disks?key=AIzaSyD8jA1D-koUpskRb0dbWU7LtDgdiFgF89s",
    body: jsonDataObj,
    json: true
  }, function(error, response, body){
  console.log(body);
});
