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
      info: "I am a Software Engineering student at LPNU. I have experience in C, C++, C#, and Assembly programming. In our team, I am a Scrum Master, so my job is to focus on the team, take steps to ensure the team and individual team members achieve success, facilitate collaboration to meet project goals effectively, and help remove obstacles that may hinder progress. I also ensure that Agile principles are followed, promote continuous improvement, and maintain clear communication between team members and stakeholders.",
    },
    {
      name: "Shchuruk Myroslav",
      position: "Tester",
      img: "/myroslav-img.png",
      info: "Myroslav",
    },
    {
      name: "Khomiak Denys",
      position: "Software architect",
      img: "/denys-img.jpg",
      info: "Denys",
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
