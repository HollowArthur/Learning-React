import {EditButton,DeleteButton} from "./Button";

let Project = ({ title, description }) => {
    return (
      <div className="projects">
        <h1>{title}</h1>
        <img src="https://picsum.photos/200/300" />
        <p>{description}</p>
        <EditButton/>
        <DeleteButton/>
      </div>
    );
  };

  export default Project;