import "./Shell.scss";

export const Shell: React.FC = ({ children }) => {
  return (
    <main className="shell">
      <div className="wrapper">{children}</div>
    </main>
  );
};
