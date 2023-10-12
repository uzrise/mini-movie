import Image from "next/image";
import styles from "./EmployeeList.module.css";

const EmployeeList = ({ groups }) => {
  if (!groups || groups.length === 0) return null;

  return (
    <div className={styles.employeeList}>
      {groups.map((group) => (
        <div key={group.post} className={styles.group}>
          <h4>{group.post}</h4>

          <div className={styles.employees}>
            {group.employees.map((employee) => {
              return (
                <div key={employee.id} className={styles.employee}>
                  <Image
                    src={
                      employee.photo ||
                      "https://cdn.dribbble.com/users/760319/screenshots/3907189/man.png?resize=400x0"
                    }
                    width={100}
                    height={150}
                    alt={employee.fullName || employee.fullNameEn}
                    loading="lazy"
                    className={styles.photo}
                  />
                  <p>{employee.fullName || employee.fullNameEn}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
