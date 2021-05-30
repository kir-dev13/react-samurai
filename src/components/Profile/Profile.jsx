import React from "react";
import s from "./Profile.module.sass";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={s.content}>
      <div>
        <img
          src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg"
          alt=""
        />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
