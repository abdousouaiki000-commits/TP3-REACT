function Notifications({ notifications }) {
  return (
    <div>
      {notifications > 0 && <h3>Vous avez des notifications</h3>}
    </div>
  );
}

export default Notifications;