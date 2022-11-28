import { useState } from "react";

function usePage() {
  const [page, setPage] = useState(10);
  const [pageSize, setPageSize] = useState(1);

  return { page, setPage, pageSize, setPageSize };
}

export default usePage;
