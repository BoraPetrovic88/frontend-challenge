import "./Pagination.scss";

interface Props {
  setPageNumber: (page: number) => void;
  totalPages: number;
  activePage: number;
}

export const Pagination: React.FC<Props> = ({ setPageNumber, totalPages, activePage }) => {
  const hanldeButtonClick = (page: number) => {
    setPageNumber(page);
  };

  const renderTotalPages = () => {
    const element = [];
    for (let i = 1; i <= totalPages; i++) {
      element.push(
        <li key={i}>
          <button onClick={() => hanldeButtonClick(i)} className={activePage === i ? "active" : ""}>
            {i}
          </button>
        </li>
      );
    }
    return element;
  };

  return (
    <div className="pagination">
      <ul className="border-pagination">{renderTotalPages()}</ul>
    </div>
  );
};
