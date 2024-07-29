export const GET_INVOICES = `
   query GetInvoices($page: Int!, $pageSize: Int!) {
      invoices(page: $page, pageSize: $pageSize) {
        id
        vendor_name
        amount
        due_date
        description
        user_id
        paid
      }
    }
`;
