import { gql, useQuery } from "@apollo/client";
// import styles from "../styles/test.module.scss";
import styles from "../styles/test.module.scss";

const ABOUT_PAGE_QUERY = gql`
  query {
    pageBy(uri: "about-us") {
      id
      title
      content
    }
  }
`;

const AboutPage = () => {
  const { loading, error, data } = useQuery(ABOUT_PAGE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, content } = data.pageBy;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AboutPage;
