import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';
import styles from "./AuthForm.module.scss"
import Layout from "@components/Layout";
import { FaUser } from "react-icons/fa";
import AuthContext from "@context/AuthContext";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login, error} = useContext(AuthContext)

    useEffect(() => {
      error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email, password})
    }

    return (
      <Layout title="User login">
        <div className={styles.auth}>
          <h1>
            <FaUser /> Log In{" "}
          </h1>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn">Login</button>
          </form>
          <p>Don't have an account? <Link href="/account/register"><a>Register</a></Link> </p>
        </div>
      </Layout>
    );
}

export default LoginPage
