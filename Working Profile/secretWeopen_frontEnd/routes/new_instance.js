const Compute = require('@google-cloud/compute');
const compute = new Compute();

const srcDisk = "https://www.googleapis.com/compute/v1/projects/hand-it-over/zones/us-east1-b/disks/test-instance";

newVm = createVMWithGivenDisk('instance-test', srcDisk);
newVm.then((vmres) => {
  console.log("VM Source: " + vmres.metadata.targetLink);
  console.log("Connected to http://"+JSON.stringify(vmres.metadata));
});






async function createVMWithGivenDisk(vmName, srcDisk)
{
    try {
      const zone = await compute.zone('us-east1-b');
      const data = await zone.createVM(
        vmName, 
        { 
	  http : true,
	  disks : [ 
          {
            "boot": true,
            "source" : srcDisk
          }
        ],
	 metadata :	{
		items :	[
		{
			key : 'startup-script',
			value :  `#! /bin/bash
cd ~/secretWeapon/hand-it-over
npm start &`
		},
		],	  
      },
      });
      const operation = data[1];
      await operation.promise();
      // Virtual machine created.
      return operation;

    } catch (error) {
      console.error(error);
    }
}
