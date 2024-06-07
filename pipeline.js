// I have t


const { BigQuery } = require('@google-cloud/bigquery');


// enable api, get keys,

// upload some data to it,

// fetch the data...

// ready to be shipped elsewhere

// Creates a client
const bigquery = new BigQuery();

async function queryBigQuery() {
  const query = `
    SELECT name, SUM(number) as total_people
    FROM \`bigquery-public-data.usa_names.usa_1910_current\`
    WHERE state = 'TX'
    GROUP BY name
    ORDER BY total_people DESC
    LIMIT 20
  `;

  const options = {
    query: query,
    location: 'US',
  };

  // Run the query
  const [rows] = await bigquery.query(options);

  console.log('Query Results:');
  rows.forEach(row => {
    console.log(`${row.name}: ${row.total_people}`);
  });
}
    
queryBigQuery();
