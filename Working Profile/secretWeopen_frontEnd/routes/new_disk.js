const Compute = require('@google-cloud/compute');
const compute = new Compute();

const srcSnap = "projects/hand-it-over/global/snapshots/snapshot-1";
const disk = createDisk('test-instance',srcSnap);

disk.then((res) => {
	console.log("Disk Source: " + res.metadata.targetLink);
});


async function createDisk(diskName, snapshot)
{
    try {
      const zone = await compute.zone('us-east1-b');
      const data = await zone.createDisk(
        diskName, 
        {  "sourceSnapshot": snapshot
        });
      const operation = data[1];
      await operation.promise();
      //DISK Created
      return operation;
    } catch (error) {
      console.error(error);
    }
}
