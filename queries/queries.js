import { gql } from 'graphql-request';

export const TIMELINEQUERY = gql`
  {
    timelines(orderBy: id_ASC) {
        date,
        event,
        description
      }
  }
`

export const BLOGSDETAILS = gql`
  {
    blogs(orderBy: id_ASC) {
      id,
      name,
      date,
      coverImage {
        url
      },
      slug
    }
  }
`

export const FETCHHARDWARE = gql`
  {
    tools(orderBy: id_ASC) {
      name
      link
      description,
      category
    }
  }
`
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
`
export const GETPROJECTS = gql`
  {
    projects(orderBy: id_ASC) {
      name,
      description,
      liveurl,
      repourl,
      coverimage{
        url
      },
      type
    }
  }
`