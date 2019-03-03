import { sharedState } from "./shared/shared";

// show object spread works, i.e. babel works
const obj = {
  foo: "bar"
};
export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters);

  const { state } = sharedState;
  state.increment();

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!", state, ...obj })
  });
}
