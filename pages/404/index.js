import Link from "next/link";
import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from "@components/Layout";
import styles from "./404.module.css";

const ErrorPage = () => {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1><FaExclamationTriangle /> 404</h1>
        <p>Nothing was found</p>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
