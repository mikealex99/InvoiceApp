import React, { useState } from "react";
import InvoiceList from "../components/InvoiceList";
import InvoiceModal from "../components/InvoiceModal";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Invoices: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<number | null>(null);
  const { invoices } = useSelector((state: RootState) => state.invoices);

  const handleInvoiceClick = (id: number) => {
    setSelectedInvoice(id);
  };

  const handleCloseModal = () => {
    setSelectedInvoice(null);
  };

  const invoice = invoices?.find((inv) => inv.id === selectedInvoice) || null;

  return (
    <div>
      <InvoiceList onInvoiceClick={handleInvoiceClick} />
      <InvoiceModal invoice={invoice} onClose={handleCloseModal} />
    </div>
  );
};

export default Invoices;
