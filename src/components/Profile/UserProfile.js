import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h2>YOUR PROFILE</h2>
      
      <ProfileForm />
      <br/>
    </section>
  );
};

export default UserProfile;
