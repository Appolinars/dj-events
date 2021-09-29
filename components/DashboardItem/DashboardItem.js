import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "./DashboardItem.module.scss";

const DashboardItem = ({ evt, handleDelete }) => {
  return (
    <div className={styles.event}>
      <h4>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${evt.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <button href="#" className={styles.delete} onClick={() => handleDelete(evt.id)}>
        <FaTimes /> <span>Delete</span>
      </button>
    </div>
  );
};

export default DashboardItem;
