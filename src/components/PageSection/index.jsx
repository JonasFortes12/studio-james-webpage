import style from "./PageSection.module.scss";

function PageSection({ title, component }) {
  return (
    <>
      <div className={style.pageSection}>

        <div className={style.pageSection__title}>
          <h3>{title}</h3>
          <div></div>
        </div>

        <div>{component}</div>
      
      </div>
    </>
  );
}

export default PageSection;
