import React from "react";
import "../styles/invoiceModal.css";
import { Invoice } from "../utils/interfaces";

const InvoiceModal: React.FC<{
  invoice: Invoice | null;
  onClose: () => void;
}> = ({ invoice, onClose }) => {
  if (!invoice) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Invoice Details</h2>
        <p>
          <strong>Vendor:</strong> {invoice.vendor_name}
        </p>
        <p>
          <strong>Amount:</strong> ${invoice.amount}
        </p>
        <p>
          <strong>Due Date:</strong>{" "}
          {new Date(invoice.due_date).toLocaleString().split(",")[0]}
        </p>
        <p>
          <strong>Description:</strong> {invoice.description}
        </p>
        <p>
          <strong>Paid:</strong> {invoice.paid ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default InvoiceModal;
