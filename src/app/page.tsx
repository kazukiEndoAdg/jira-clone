"use client";

/** This page is associated with the route /. */

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { executeSort, getNewSortConfig, SortConfig } from "@/utils/sort";
import { useState } from "react";

export type Invoice = {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
};

export type InvoiceKeys = keyof Invoice;

export default function Home() {
  const [invoices, setInvoices] = useState([
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]);

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });

  const handleSort = (key: InvoiceKeys) => {
    setSortConfig((current) => getNewSortConfig(current, key));
    setInvoices((currentInvoices) =>
      executeSort<Invoice>(sortConfig, key, currentInvoices)
    );
  };
  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortKey="invoice"
              label="invoice"
              sortDirection={
                sortConfig.key === "invoice" ? sortConfig.direction : undefined
              }
              onSort={handleSort}
            >
              Invoice
            </TableHead>
            <TableHead
              sortable
              sortKey="paymentStatus"
              label="paymentStatus"
              sortDirection={
                sortConfig.key === "paymentStatus"
                  ? sortConfig.direction
                  : undefined
              }
              onSort={handleSort}
            >
              Status
            </TableHead>
            <TableHead
              sortable
              sortKey="paymentMethod"
              label="paymentMethod"
              sortDirection={
                sortConfig.key === "paymentMethod"
                  ? sortConfig.direction
                  : undefined
              }
              onSort={handleSort}
            >
              Method
            </TableHead>
            <TableHead
              className="text-right"
              sortable
              sortKey="totalAmount"
              label="totalAmount"
              sortDirection={
                sortConfig.key === "totalAmount"
                  ? sortConfig.direction
                  : undefined
              }
              onSort={handleSort}
            >
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
