import React from "react";

import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Artist from "../listItems/Artist";

import { GET_INSTRUMENTS } from "../../queries";
import { from } from "apollo-boost";

const ArtistDetails = () => {
  let history = useHistory();
  const { id, firstName, lastName } = history.location.state;

  return (
    <div>
      <Container>
        <Artist key={id} id={id} firstName={firstName} lastName={lastName} />
       
        <Button color="primary" size="small" variant="outlined">
          <Link
            to={{
              pathname: "/",
            }}
          >
            GO BACK HOME
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default ArtistDetails;
