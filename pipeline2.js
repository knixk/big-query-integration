// Import the Google Cloud client library
const { BigQuery } = require('@google-cloud/bigquery');

// Path to your service account key file
const keyFilename = 'C:\\Users\\Tanishk\\Downloads\\service-key.json';

console.log(keyFilename)


// Create a BigQuery client
const bigquery = new BigQuery({ keyFilename });

// Your dataset ID and table ID
const datasetId = 'test-project-2-425708.32423asdd2_';
const tableId = 'property_sales';

// test-project-2-425708.32423asdd2_.property_sales

async function queryBigQuery() {
  // The SQL query to execute
  const query = `SELECT * FROM \`${datasetId}.${tableId}\` LIMIT 10`;

  // Options for the query
  const options = {
    query: query,
    location: 'US', // Replace with your dataset's location
  };

  try {
    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    
    // Log the results
    console.log('Query Results:');
    rows.forEach(row => console.log(row));
  } catch (error) {
    console.error('ERROR:', error);
  }
}

// Run the function
queryBigQuery();
