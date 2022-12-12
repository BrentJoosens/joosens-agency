import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  artistName,
  fullName,
  artistRoles,
  artistDescription,
  artistInfo,
  artistPictures,
  artistPicture,
} from "../../page.module.css"

// ArtistPage Component
// Imports

const ArtistPage = ({
  data: {
    wpArtist: {
      artistMeta: artist,
      roles: { nodes: roles },
    },
  },
}) => {
  const image = getImage(artist.profilePicture.localFile)

  return (
    <Layout pageTitle="Artist Template">
      // Header JSX
      <section className={artistPictures}>
        {picture1 && (
          <GatsbyImage
            className={artistPicture}
            image={picture1}
            alt={artist.picture1.altText}
          />
        )}
        {picture2 && (
          <GatsbyImage
            className={artistPicture}
            image={picture2}
            alt={artist.picture2.altText}
          />
        )}
        {picture3 && (
          <GatsbyImage
            className={artistPicture}
            image={picture3}
            alt={artist.picture3.altText}
          />
        )}
      </section>
    </Layout>
  )
}

// Page Query

export const query = graphql`
  query MyQuery($slug: String) {
    wpArtist(slug: { eq: $slug }) {
      artistMeta {
        firstName
        lastName
        email
        description
        artistName
        height
        origin
        phoneNumber
        shirtSize
        shoeSize
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`

export default ArtistPage
