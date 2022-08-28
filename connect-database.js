const { Client } = require("cassandra-driver")

async function run() {
  const client = new Client({
    cloud: {
      secureConnectBundle: "<<PATH/TO/>>secure-connect-userinfo.zip",
    },
    credentials: {
      username: "DArCdwxcgxNrodrcSumMDOCv",
      password: "qy53FLqcpW+8fhxZ813cUPfhl63kais7.1CSYZHFtIGWWbylXk2JjRAwjNpUYD,BH7X2-,QZXva.XrMCsdgBuGhiC-wALq+tsH+OHyZQ,d,w..8Uws,ZHZZ,sjasPNOh",
    },
  });

  await client.connect();

  // Execute a query
  const rs = await client.execute("SELECT * FROM system.local");
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);

  await client.shutdown();
}

// Run the async function
run();