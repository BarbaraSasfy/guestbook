import { gql } from "@apollo/client";

export const GET_AllMessages = gql`
  query {
    allMessages {
      id
        name
    		website
    		message
    		date
    }
  }
`;