import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event, context) => {
  try {
    const params = {
      TableName: "MenuLinks"
    };

    const command = new ScanCommand(params);
    const data = await client.send(command);

    return data.Items;
  } catch (err) {
    throw new Error(err);
  }
};
