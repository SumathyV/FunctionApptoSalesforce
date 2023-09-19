const https = require("https");
console.log("Calling using https")
module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name || (req.body && req.body.name);
  /* const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
  //body: responseMessage;
  //};

  //Invoke REST API
  context.log("STEP 1",name);

  https.get("https://jsonplaceholder.typicode.com/users", function (res) {
      let data = [];
      const headerDate =
      res.headers && res.headers.date ? res.headers.date : "no response date";
      context.log("Status Code:", res.statusCode);
      context.log("Date in Response header:", headerDate);

      res.on("data", (chunk) => {
        data.push(chunk);
      });

      res.on("end", () => {
        context.log("Response ended: ");
        const users = JSON.parse(Buffer.concat(data).toString());

        for (user of users) {
            context.log(`Got user with id: ${user.id}, name: ${user.name}`);
        }
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: data
      };
      });
    })
    .on("error", (err) => {
      context.log("Error: ", err.message);
    });
};
