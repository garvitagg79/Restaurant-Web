// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NewItem, Connect } = initSchema(schema);

export {
  NewItem,
  Connect
};