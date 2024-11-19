import React, { useState } from "react";

const Body = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [info, setInfo] = useState("");

  const handleCardClick = (person) => {
    setActiveCard(person.name);
    setInfo(person.info);
  };

  const people = [
    {
      name: "Sofia Chaikovska",
      position: "Software engineer",
      img: "/sofia.png",
      info: "I am a Full-Stack Developer with practical experience in designing and building modern web applications. My expertise lies in creating efficient and scalable solutions using cutting-edge technologies. With a strong foundation in Node.js, I develop robust back-end systems that seamlessly handle data and ensure optimal performance. On the front end, I specialize in React, crafting dynamic and user-friendly interfaces that deliver excellent user experiences. I have hands-on experience working with MongoDB, designing and managing databases that are optimized for fast and secure data handling. Whether it’s building an entire application from scratch or improving an existing system, I enjoy turning ideas into reality.",
    },
    {
      name: "Roksolana Shendiukh",
      position: "Business analyst",
      img: "roksolana.jpg",
      info: "Roksolana",
    },
    {
      name: "Khrystyna Shkirliak",
      position: "Scrum master",
      img: "/khrystyna-img.png",
      info: "Khrystyna",
    },
    {
      name: "Shchuruk Myroslav",
      position: "Tester",
      img: "/myroslav-img.png",
      info: "I am Test Engineer in my team and a student of LPNU. I specialize in software testing and quality assurance. My role involves designing and executing test cases to identify potential issues in software systems, ensuring they meet the desired quality standards and requirements.",
    },
    {
      name: "Khomiak Denys",
      position: "Software architect",
      img: "/denys-img.jpg",
      info: "I am Software Engineering student at LPNU. I have experience in C/C++, Assembly, Python programming languages. In our team, I am a Software Architect, so my job is to design the overall structure of the software system, define its main components, and ensure that the architecture aligns with the project's requirements and goals. I am responsible for selecting the appropriate technologies, tools, and frameworks, as well as establishing coding standards and design principles.",
    },
  ];

  return (
    <main style={styles.body}>
      {people.map((person, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            transform: activeCard === person.name ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          onClick={() => handleCardClick(person)}
        >
          <img src={person.img} alt={person.name} style={styles.photo} />
          <div style={styles.textContainer}>
            <h2 style={styles.name}>{person.name}</h2>
            <p style={styles.position}>{person.position}</p>
          </div>
        </div>
      ))}

      {info && (
        <div style={styles.infoBox}>
          <p>{info}</p>
        </div>
      )}
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "relative",
    fontFamily: '"Roboto", sans-serif',
    padding: "50px",
  },
  card: {
    width: "200px",
    height: "200px",
    padding: "1em",
    paddingTop: "30px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  photo: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#75163F",
    margin: "0.5em 0 0 0",
  },
  infoBox: {
    marginTop: "2em",
    padding: "1em",
    width: "100%",
    backgroundColor: "#75163F",
    borderRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontSize: "1em",
    color: "#fff",
  },
};

export default Body;
