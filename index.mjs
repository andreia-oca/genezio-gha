export const handler = async (event) => {
    console.log("Function was called");
    const name = event.queryStringParameters?.name || "World";
    console.log(`Name: ${name}`);

    console.log(process.env["MY_SECRET"]);

    return {
      statusCode: 200,
      body: `Hello, ${name}! Welcome to Genezio Functions!`,
    };
  };
