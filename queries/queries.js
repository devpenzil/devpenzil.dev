import { gql } from "graphql-request";

export const TIMELINEQUERY = gql`
  {
    timelines(orderBy: id_ASC) {
      date
      event
      description
    }
  }
`;

export const BLOGSDETAILS = gql`
  {
    blogs(orderBy: id_ASC) {
      id
      name
      date
      coverImage {
        url
      }
      slug
    }
  }
`;

export const FETCHHARDWARE = gql`
  {
    tools(orderBy: id_ASC) {
      name
      link
      description
      category
    }
  }
`;
export const THREEBLOGDETAILS = gql`
  {
    blogs(orderBy: id_ASC, first: 1) {
      id
      name
      date
      coverImage {
        url
      }
      slug
    }
  }
`;
export const GETPROJECTS = gql`
  {
    projects(orderBy: id_DESC) {
      name
      description
      liveurl
      repourl
      coverimage {
        url
      }
      type
    }
  }
`;
export const GETTOKENS = gql`
  {
    cryptos(orderBy: id_ASC) {
      name
      image {
        url
      }
    }
  }
`;

export const GETSITEVIEWS = gql`
  {
    stat(where: { id: "cl1ixdrp31f2d0cphdjl2mrfj" }) {
      pagevisit
    }
  }
`;

export const ABOUT = gql`
  {
    about(where: { id: "cl3iuyfnk02x70fpedhe9z2qx" }) {
      about {
        markdown
      }
    }
  }
`;
export const MYIMAGE = gql`
  {
    asset(where: { id: "cl3ivczmp03fw0fpe2n6lxkf5" }) {
      url
    }
  }
`;
