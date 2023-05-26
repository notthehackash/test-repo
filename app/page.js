"use client";

import React, { useState } from "react";

import styles from "./page.module.css";

function MyButton(props) {
  return <button onClick={props.onClick}>Don't click me</button>;
}

function Component() {
  return <p>I am a JS function that returns Markup</p>;
}

function ComponentWithProp(props) {
  if (props.status) {
    return (
      <p>
        Howard, it's {props.user.lastName}. {props.user.firstName}{" "}
        {props.user.lastName}. You're my lawyer, so I think you should know I've
        killed a lot of people. Some escort girls in an apartment uptown, uh,
        some homeless people, maybe five or ten, an N.Y.U. girl I met in Central
        Park. I left her at a parking lot behind some doughnut shop. I killed
        Bethany, my old girlfriend, with a nail gun. And-And-And some man,
        s-s-some old faggot with a dog. Last week, I, uh, I killed another girl
        with a chainsaw. I had to. She almost got away. And someone else there,
        I can't remember, maybe a model... She's dead too. And, uh, Paul Allen.
        I killed Paul Allen with an axe in the face, his body is dissolving in a
        bathtub in Hell's Kitchen. I don't wanna leave anything out here. I
        guess I've killed maybe... 20 people. Maybe 40! I have tapes of a lot of
        it. Some of the girls have seen the tapes. I even, um... I ate some of
        their brains... and I tried to cook a little. Tonight, I, uh, I just had
        to kill a lot of people! And, um... I'm not sure I'm gonna get away with
        it this time. So, uh, I mean, I guess I'm a pretty, uh... I mean, I
        guess I'm a pretty sick guy. So, if you get back tomorrow, I may show up
        at Harry's Bar. So, you know... Keep your eyes open.
      </p>
    );
  } else {
    return (
      <p>
        My name is {props.user.firstName} {props.user.lastName}. I’m{" "}
        {props.user.age} years old. I believe in taking care of myself, and a
        balanced diet and a rigorous exercise routine. In the morning, if my
        face is a little puffy, I’ll put on an ice pack while doing my stomach
        crunches. I can do a thousand now. After I remove the ice pack I use a
        deep pore cleanser lotion. In the shower I use a water activated gel
        cleanser, then a honey almond body scrub, and on the face an exfoliating
        gel scrub. Then I apply an herb-mint facial masque which I leave on for
        10 minutes while I prepare the rest of my routine. I always use an after
        shave lotion with little or no alcohol, because alcohol dries your face
        out and makes you look older. Then moisturizer, then an anti-aging eye
        balm followed by a final moisturizing protective lotion. There is an
        idea of a {props.user.firstName} {props.user.lastName}. Some kind of
        abstraction. But there is no real me. Only an entity. Something
        illusory. And though I can hide my cold gaze, and you can shake my hand
        and feel flesh gripping yours, and maybe you can even sense our
        lifestyles are probably comparable, I simply am not there.
      </p>
    );
  }
}

export default function MyApp() {
  const [caught, setCaught] = useState(false);
  const [user, setUser] = useState({
    firstName: "Patrick",
    lastName: "Bateman",
    age: "27",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    // Perform further actions with the user data
  };

  function toggleStatus() {
    console.log(caught);
    setCaught((prevState) => !prevState);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.center}>Hello world</h1>
      <Component />
      <form style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Age: </label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <MyButton onClick={toggleStatus} className={styles.code} />
      <ComponentWithProp user={user} status={caught} />
    </div>
  );
}
