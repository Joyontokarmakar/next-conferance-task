import { gql } from "@apollo/client";
export const GET_CONFERENCES = gql`
query Conferences {
  conferences {
    id
    name
    slogan
    startDate
    websiteUrl
  }
}
`;

export const GET_CONFERENCE_DETAILS = gql`
query Conference($conferenceId: ID!) {
  conference(id: $conferenceId) {
    id
    name
    slogan
    startDate
    websiteUrl
    organizers {
      image {
        url
        title
      }
      name
      tagline
      company
      about
      aboutShort
    }
    speakers {
      image {
        url
        title
      }
      name
      tagline
      company
      about
      aboutShort
      social {
        twitter
        linkedin
        dribble
        github
      }
    }
    schedules {
      day
      intervals {
        begin
        end
        title
      }
      description
    }
    sponsors {
      image {
        title
        url
      }
      name
      tagline
      company
      about
      aboutShort
    }
  }
}
`;