import ReactPaginateModule from "react-paginate";
import css from "./Pagination.module.css";

const ReactPaginate = (
  ReactPaginateModule as unknown as { default: typeof ReactPaginateModule }
).default;

interface Props {
  pageCount: number;
  page: number;
  setPage: (page: number) => void;
}

export default function Pagination({ pageCount, page, setPage }: Props) {
  return (
    <ReactPaginate
      forcePage={page - 1}
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={({ selected }: { selected: number }) =>
        setPage(selected + 1)
      }
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="<"
      nextLabel=">"
    />
  );
}
