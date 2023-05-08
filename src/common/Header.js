const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
        title="Logistics UK"
        alt="Logistics UK"
      />
    </header>
  );
};

export default Header;
