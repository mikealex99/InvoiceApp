import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInvoices } from "../store/invoiceSlice";
import { RootState, AppDispatch } from "../store";
import "../styles/invoices.css";

const InvoiceList: React.FC<{ onInvoiceClick: (id: number) => void }> = ({
  onInvoiceClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { invoices, loading, error } = useSelector(
    (state: RootState) => state.invoices
  );

  const pageSize: number = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchInvoices({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Invoices</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Payee</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} onClick={() => onInvoiceClick(invoice.id)}>
              <td>{new Date(invoice.due_date).toLocaleDateString()}</td>
              <td>{invoice.vendor_name}</td>
              <td>{invoice.description}</td>
              <td>{new Date(invoice.due_date).toLocaleDateString()}</td>
              <td>${invoice.amount.toFixed(2)}</td>
              <td className="status">{invoice.paid ? "Paid" : "Open"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default InvoiceList;
