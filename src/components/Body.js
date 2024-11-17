import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/sofia.png"} alt="Sofia Chaikovska" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Sofia Chaikovska</h2>
          <p style={styles.position}>Software engineer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"roksolana.jpg"} alt="Roksolana" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Roksolana Shendiukh</h2>
          <p style={styles.position}>Business analyst</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/khrystyna-img.png"}
          alt="Khrystyna Shkirliak"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Khrystyna Shkirliak</h2>
          <p style={styles.position}>Scrum master</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/myroslav-img.png"}
          alt="Shchuruk Myroslav"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Shchuruk Myroslav</h2>
          <p style={styles.position}>Tester</p>
        </div>
      </div>
      <div style={styles.card}>
        <img 
          src={"/denys-img.jpg"} 
          alt="Khomiak Denys"
          style={styles.photo} 
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Khomiak Denys</h2>
          <p style={styles.position}>Software architector</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
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
};

export default Body;
