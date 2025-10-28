import Avatar from "./Avatar";

function Profile({ nombre, email }) {
  return (
    <>
      <h2>Este es el perfil de:</h2>
      <Avatar nombre={nombre} email={email} />
    </>
  );
}

export default Profile;
