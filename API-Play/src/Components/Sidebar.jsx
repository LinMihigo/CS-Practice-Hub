import Link from "./Link";

function SideBar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Words descriptions", path: "/WordsDescribed" },
    { label: "Numbers facts", path: "/Numbers" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className="mb-3">
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
